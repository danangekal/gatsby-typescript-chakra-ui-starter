import { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

function SecondPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Page Two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </Layout>
  );
}

export default SecondPage;
