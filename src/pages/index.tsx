import { ReactElement } from 'react';
import { Link as ReachLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Heading, Text, Flex, Link,
} from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <Heading as="h1" marginBottom="1.45rem">
        Hi people
      </Heading>
      <Text as="p" margin="0 0 1.45rem">
        Welcome to your new Gatsby site with Typescript & Chakra UI.
      </Text>
      <Text as="p" margin="0 0 1.45rem">
        Now go build something great.
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="A Gatsby astronaut"
          style={{ marginBottom: '1.45rem' }}
        />
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
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
          <StaticImage
            src="../images/chakra-ui-icon.png"
            width={80}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="A Chakra UI icon"
            style={{ margin: '0 0.5rem 1.45rem' }}
          />
        </Flex>
      </Flex>
      <Text as="p" margin="0 0 1.45rem">
        <Link as={ReachLink} color="purple.500" to="/page-2/">
          Go to page 2
        </Link>
      </Text>
    </Layout>
  );
}

export default IndexPage;
