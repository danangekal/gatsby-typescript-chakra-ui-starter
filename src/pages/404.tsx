import { ReactElement } from 'react';
import { Text } from '@chakra-ui/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage(): ReactElement {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Text as="h1">404: Not Found</Text>
      <Text as="p">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Layout>
  );
}

export default NotFoundPage;
