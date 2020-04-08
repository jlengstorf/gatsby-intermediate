// 2.) >> Renders provided MDX content ontop of the ThemeLayout >>

import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import ThemeLayout from './theme-layout';

const DocumentPage = ({page}) => (
	<ThemeLayout>
		<h1>{page.title}</h1>
		<MDXRenderer>{page.body}</MDXRenderer>
		<p>This page was updated: {page.updated}.</p>
	</ThemeLayout>
);

export default DocumentPage;
