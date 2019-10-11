/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';
import { Global } from '@emotion/core';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <Fragment>
    <Global
      styles={theme => ({
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          fontFamily: theme.fonts.body,
          fontSize: 20,
          margin: 0,
        },
      })}
    />
    <header sx={{ bg: 'primary', color: 'background', p: 3 }}>
      <Link
        to="/"
        sx={{
          color: 'background',
          fontWeight: 'bold',
          textDecoration: 'none',
          ':focus': {
            outline: t => `2px solid ${t.colors.background}`,
            outlineOffset: 4,
          },
        }}
      >
        Negroni Appreciation Society
      </Link>
    </header>
    <main
      sx={{
        my: 4,
        mx: 'auto',
        maxWidth: 650,
      }}
    >
      {children}
    </main>
  </Fragment>
);

export default Layout;
