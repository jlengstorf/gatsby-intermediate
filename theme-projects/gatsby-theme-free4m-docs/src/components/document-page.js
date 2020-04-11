/** @jsx jsx **/
// 2.) >> Renders provided MDX content ontop of the ThemeLayout >>

import {jsx} from 'theme-ui';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import ThemeLayout from './theme-layout';
import TableOfContents from './table-of-contents';

const DocumentPage = ({page}) => (
	<ThemeLayout>
		<h1>{page.title}</h1>
		<MDXRenderer>{page.body}</MDXRenderer>
		<p
			sx={{
				borderTop: (theme) => `1px solid ${theme.colors.muted}`,
				color: 'muted',
				fontSize: 14,
				mt: 2,
				pt: 2,
			}}
		>
			This page was updated: {page.updated}.
		</p>

		<TableOfContents />
	</ThemeLayout>
);

export default DocumentPage;
