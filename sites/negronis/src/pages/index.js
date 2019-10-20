import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <Layout>
    <h1>Negronis: A Love Story</h1>
    <p>
      A Negroni, while simple, is a beautifully complex cocktail with endless
      opportunities to experiment with flavors.
    </p>
    <Link to="/history">Learn the History</Link>
  </Layout>
);

export default Index;
