/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, Link, useStaticQuery } from 'gatsby';

const TableOfContents = () => {
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

  const pages = data.allDocsPage.nodes;

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {pages.map(({ id, path, title }) => (
          <li key={id}>
            <Link
              to={path}
              sx={{
                '&.active': {
                  fontStyle: 'italic',
                  textDecoration: 'none',
                  '::after': { content: '" (currently viewing)"' },
                },
              }}
              activeClassName="active"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
