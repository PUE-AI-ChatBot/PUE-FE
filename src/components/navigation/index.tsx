import React, { useContext } from 'react';
import QuickButton from './QuickButton';
import Gnb from './GNB';
import NavigationProvider from './NavigationProvider';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';

type INavigation = React.PropsWithChildren;
const Navigation = ({ children }: INavigation) => {
  const router = useRouter();

  return (
    <NavigationProvider>
      {router.pathname !== '/enter' ? <Gnb /> : null}
      <Box bgcolor={'background.default'}>
        <Container
          sx={{
            height: 'calc(100vh - 4rem)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {children}
        </Container>
      </Box>
      {router.pathname !== '/enter' ? <QuickButton /> : null}
    </NavigationProvider>
  );
};

export default Navigation;
