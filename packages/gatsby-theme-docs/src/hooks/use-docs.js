import { graphql, useStaticQuery } from 'gatsby';

const useDocs = () => {
  const data = useStaticQuery(graphql`
    query {
      allDocsPage {
        nodes {
          id
          title
          path
        }
      }
    }
  `);

  return data.allDocsPage.nodes;
};

export default useDocs;
