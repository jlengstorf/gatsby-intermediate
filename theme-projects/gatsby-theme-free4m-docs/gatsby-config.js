const withDefaults = require('./utils/default-options');

module.exorts = (options) => {
	const {contentPath, useExternalMDX} = withDefaults(options);

	return {
		plugins: [
			{
				resolve: 'gatsby-source-filesystem',
				options: {
					name: 'gatsby-theme-free4m-docs',
					path: contentPath,
				},
			},
			!userExternalMDX && {
				resolve: 'gatsby-plugin-mdx',
				options: {
					defaultLayouts: {
						default: require.resolve('./src/components/layout/doc.js'),
					},
				},
			},
		].filter(Boolean),
	};
};
