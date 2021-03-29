/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { ReactElement, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Box, Text, Link } from '@chakra-ui/react';

import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <Box maxW="960px" margin="0 auto" padding="0 1.0875rem 1.45rem">
        <main>{children}</main>
        <Box marginTop="2rem">
          <Text>
            ©
            {' '}
            {new Date().getFullYear()}
            , Built with
            {' '}
            <Link href="https://www.gatsbyjs.com" color="purple.500" isExternal>
              Gatsby
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
