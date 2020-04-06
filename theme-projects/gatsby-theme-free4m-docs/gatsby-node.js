const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const withDefaults = require('./utils/default-options');

exports.onPreBootstrap = ({store}, options) => {
	// CREATE DOCUMETNS DIRECTORY
	const {program} = store.getState();
	const {contentPath} = withDefaults(options);
	const dir = path.join(program.directory, contentPath);

	if (!fs.existsSync(dir)) {
		mkdirp.sync(dir);
	}
};
