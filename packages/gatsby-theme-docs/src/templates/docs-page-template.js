import React from 'react';
import DocsPage from '../components/docs-page';
import { graphql } from 'gatsby';

export const query = graphql`
  query($pageID: String!) {
    docsPage(id: { eq: $pageID }) {
      title
      updated(fromNow: true)
      body
    }
  }
`;

const DocsPageTemplate = ({ data }) => <DocsPage page={data.docsPage} />;

export default DocsPageTemplate;
