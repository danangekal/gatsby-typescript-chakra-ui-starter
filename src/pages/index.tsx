import { ReactElement } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site with typescript.</p>
      <p>Now go build something great.</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="A Gatsby astronaut"
          style={{ marginBottom: '1.45rem' }}
        />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StaticImage
            src="../images/gatsby-icon.png"
            width={80}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="A Gatsby icon"
            style={{ margin: '0 0.5rem 1.45rem' }}
          />
          <StaticImage
            src="../images/typescript-icon.png"
            width={80}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="A Typescript icon"
            style={{ margin: '0 0.5rem 1.45rem' }}
          />
        </div>
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
