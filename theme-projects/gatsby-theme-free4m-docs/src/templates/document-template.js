// 1.) >> Collects page contextual data and feeds to the DocumentPage component >>

import React from 'react';
import {graphql} from 'gatsby';

import DocumentPage from '../components/document-page';

export const docData = graphql`
	query($pageID: String!) {
		docsPage(id: {eq: $pageID}) {
			title
			updated(fromNow: true)
			body
		}
	}
`;

const DocPageTemplate = ({data}) => <DocumentPage page={data.docsPage} />;

export default DocPageTemplate;
