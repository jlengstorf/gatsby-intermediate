module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://rickandmortyapi.com/graphql/',
      },
    },
  ],
};
