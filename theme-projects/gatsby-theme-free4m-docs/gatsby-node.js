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
	const {basePath} = withDefaults(options);
	const parent = getNode(node.parent);

	// Only MDX files that are loaded by this theme
	let nodeIsMDXFile = node.internal.type === 'Mdx';
	let nodeIsLoadedByDocsThemeContext =
		parent.sourceInstanceName === 'gatsby-theme-free4m-docs';

	if (nodeIsMDXFile || nodeIsLoadedByDocsThemeContext) {
		// Account for index doc file
		let pageName = parent.name !== 'index' ? parent.name : '';

		actions.createNode({
			id: createNodeId(`DocsPage-${node.id}`),
			title: node.frontmatter || parent.name,
			path: path.join('/', basePath, parent.relativeDirectory, pageName),
			updated: parent.modifiedTime,
		});
	}
};
