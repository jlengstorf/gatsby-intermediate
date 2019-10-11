/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import useDocs from '../hooks/use-docs';

const TableOfContents = () => {
  const pages = useDocs();

  return (
    <div>
      <h2>Explore the Docs</h2>
      <ul>
        {pages.map(({ id, path, title }) => (
          <li key={id}>
            <Link
              to={path}
              sx={{
                '&.active': {
                  fontStyle: 'italic',
                  textDecoration: 'none',
                  ':after': { content: '" (currently viewing)"' },
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
