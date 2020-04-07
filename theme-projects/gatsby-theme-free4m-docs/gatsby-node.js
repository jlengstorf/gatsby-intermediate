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
