exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/search/)) {
    page.matchPath = '/search/*';
    actions.createPage(page);
  }
};
