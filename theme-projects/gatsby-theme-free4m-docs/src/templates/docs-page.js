import React from 'react';
import {grapql} from 'gatsby';

export const docData = graphql`
	query($pageID: String!) {
		docsPage(id: {eq: $pageID}) {
			title
			updated(fromNow: true)
			body
		}
	}
`;
