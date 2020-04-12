/* eslint-disable no-undef */
const withDefaults = require('./utils/default-options');

module.exports = (options) => {
	const {contentPath, useExternalMDX} = withDefaults(options);

	return {
		plugins: [
			'gatsby-plugin-theme-ui',
			{
				resolve: 'gatsby-source-filesystem',
				options: {
					name: 'gatsby-theme-free4m-docs',
					path: contentPath,
				},
			},
			!useExternalMDX && {
				resolve: 'gatsby-plugin-mdx',
				options: {
					defaultLayouts: {
						default: require.resolve('./src/components/theme-layout.js'),
					},
				},
			},
		].filter(Boolean),
	};
};
