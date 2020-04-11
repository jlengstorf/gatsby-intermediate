const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const withDefaults = require('./utils/default-options');

// CREATE DOCUMETNS DIRECTORY
exports.onPreBootstrap = ({store}, options) => {
	const {program} = store.getState();
	const {contentPath} = withDefaults(options);
	const dir = path.join(program.directory, contentPath);

	if (!fs.existsSync(dir)) {
		mkdirp.sync(dir);
	}
};

// SAMPLE CUSTOM DATA TYPE FOR DOCUMENTS
exports.createSchemaCustomization = ({actions}) => {
	actions.createTypes(`
	type DocsPage implements Node @dontInfer {
		id: ID!
		title: String!
		path: String!
		updated: Date! @dateformat
		body: String!
	}
 `);
};

// DEFINITION FOR CREATED NODES TO GQL DATA LAYER
exports.onCreateNode = ({node, actions, getNode, createNodeId}, options) => {
	// console.log('>> ON CREATE NODE:', node);

	const {basePath} = withDefaults(options);
	const parent = getNode(node.parent);

	// Only MDX files that are loaded by this theme
	let nodeIsMDXFile = node.internal.type === 'Mdx';
	let nodeIsLoadedByDocsThemeContext =
		parent &&
		parent.sourceInstanceName &&
		parent.sourceInstanceName === 'gatsby-theme-free4m-docs';

	if (nodeIsMDXFile || nodeIsLoadedByDocsThemeContext) {
		console.log('\n> FOUND A DOCS NODE!!! < \n\n', node);
		// Account for index doc file
		let pageName = parent.name !== 'index' ? parent.name : '';

		actions.createNode({
			// SYSTEM
			id: createNodeId(`DocsPage-${node.id}`),
			parent: node.id,
			internal: {
				type: 'DocsPage',
				contentDigest: node.internal.contentDigest,
			},
			// CUSTOM
			title: node.frontmatter.title || parent.name,
			path: path.join('/', basePath, parent.relativeDirectory, pageName),
			updated: parent.modifiedTime,
			//
		});
	}
};

// DEFINE A CUSTOM RESOLVER FOR THE DOC POST BODY
exports.createResolvers = ({createResolvers}) => {
	createResolvers({
		DocsPage: {
			body: {
				type: 'String!',
				resolve: (source, args, context, info) => {
					const type = info.schema.getType('Mdx');
					const mdxFields = type.getFields();
					const resolver = mdxFields.body.resolve;

					const mdxNode = context.nodeModel.getNodeById({
						id: source.parent,
					});

					return resolver(mdxNode, args, context, {
						fieldName: 'body',
					});
				},
			},
		},
	});
};

// CREATE PAGES
exports.createPages = async ({actions, graphql, reporter}) => {
	const result = await graphql(`
		query {
			allDocsPage {
				nodes {
					id
					path
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panic('<!> Error loading Docs <!>', result.errors);
	}

	const pages = result.data.allDocsPage.nodes;

	pages.forEach((page) => {
		actions.createPage({
			path: page.path,
			component: require.resolve('./src/templates/document-template.js'),
			context: {
				pageID: page.id,
			},
		});
	});
};
