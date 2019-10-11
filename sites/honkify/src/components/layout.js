/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { Global } from '@emotion/core';
import Helmet from 'react-helmet';
import Honk from '../images/honk.svg';
import Honker from './honker';

const seo = {
  title: 'Honkify.js — the goose is loose!',
  description:
    'Does your website need more HONK? Add Honkify.js to add more geese being jerks to your website.',
  image:
    'https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1569994857/honkify.jpg',
  url: 'https://honkify.netlify.com/',
};

const Layout = ({ children }) => (
  <Fragment>
    <Global styles={{ body: { margin: 0 } }} />
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jlengstorf" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
    <header sx={{ variant: 'header' }}>
      <Link to="/">
        <img src={Honk} alt="Honk." />
      </Link>
      <Link to="/">Honkify.js</Link>
      <Honker />
    </header>
    <main sx={{ variant: 'content' }}>{children}</main>
    <footer sx={{ variant: 'footer' }}>
      <a href="https://goose.game">Untitled Goose Game</a> ·{' '}
      <a href="https://twitter.com/jlengstorf">Created by Jason Lengstorf</a>
    </footer>
  </Fragment>
);

export default Layout;
