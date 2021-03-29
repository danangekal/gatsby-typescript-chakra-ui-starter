import { ReactElement } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';

interface HeaderProps {
  siteTitle?: string;
}

function Header({ siteTitle }: HeaderProps): ReactElement {
  return (
    <Box background="rebeccapurple" marginBottom="1.45rem">
      <Box maxW="960px" margin="0 auto" padding="1.45rem 1.0875rem">
        <Heading as="h1" margin="0" textColor="white" textDecoration="none">
          <Link to="/">{siteTitle}</Link>
        </Heading>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
