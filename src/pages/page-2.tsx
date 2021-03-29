import { ReactElement } from 'react';
import { Link as ReachLink } from 'gatsby';
import { Heading, Text, Link } from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function SecondPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Page Two" />
      <Heading as="h1" marginBottom="1.45rem">
        Hi from the second page
      </Heading>
      <Text as="p" margin="0 0 1.45rem">
        Welcome to page 2
      </Text>
      <Text as="p" margin="0 0 1.45rem">
        <Link as={ReachLink} color="purple.500" to="/">
          Go back to the homepage
        </Link>
      </Text>
    </Layout>
  );
}

export default SecondPage;
