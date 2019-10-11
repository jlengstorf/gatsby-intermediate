/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import TableOfContents from './table-of-contents';

const DocsPage = ({ page }) => (
  <Layout>
    <h1>{page.title}</h1>
    <MDXRenderer>{page.body}</MDXRenderer>
    <p
      sx={{
        color: 'muted',
        fontSize: 14,
        mt: 2,
        pt: 2,
        borderTop: t => `1px solid ${t.colors.muted}`,
      }}
    >
      This page was updated {page.updated}.
    </p>
    <TableOfContents />
  </Layout>
);

export default DocsPage;
