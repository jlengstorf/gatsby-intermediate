import React from 'react';
import { graphql } from 'gatsby';
import DocsPage from '../components/docs-page';

export const query = graphql`
  query($pageID: String!) {
    page: docsPage(id: { eq: $pageID }) {
      title
      updated(fromNow: true)
      body
    }
  }
`;

const DocsPageTemplate = ({ data }) => <DocsPage page={data.page} />;

export default DocsPageTemplate;
