/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <h1>Negronis: A Love Story</h1>
    <p>
      A Negroni, while simple, is a beautifully complex cocktail with endless
      opportunities to experiment with flavors.
    </p>
    <Link to="/history" sx={{ variant: 'button.hollow' }}>
      Learn the History
    </Link>
  </Layout>
);

export default Index;
