module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-theme-docs',
      options: {
        basePath: '/docs',
        useExternalMDX: true,
      },
    },
    'gatsby-plugin-theme-ui',
  ],
};
