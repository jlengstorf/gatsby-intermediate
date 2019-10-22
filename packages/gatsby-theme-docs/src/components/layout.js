import React from 'react';

const layout = ({ children }) => (
  <React.Fragment>
    <header>gatsby-theme-docs</header>
    <main>{children}</main>
  </React.Fragment>
);

export default layout;
