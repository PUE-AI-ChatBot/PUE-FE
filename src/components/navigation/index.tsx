import React from 'react';
import QuickButton from './QuickButton';
import Gnb from './GNB';
import NavigationProvider from './NavigationProvider';
import { Box, Container } from '@mui/material';

type INavigation = React.PropsWithChildren;
const Navigation = ({ children }: INavigation) => {
  return (
    <NavigationProvider>
      <Gnb />
      <Box bgcolor={'background.default'} overflow={'hidden'}>
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
      <QuickButton />
    </NavigationProvider>
  );
};

export default Navigation;
