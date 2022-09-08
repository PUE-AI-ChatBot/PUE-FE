import React from 'react';
import QuickButton from './QuickButton';
import Gnb from './GNB';
import NavigationProvider from './NavigationProvider';
import { Container } from '@mui/material';

type INavigation = React.PropsWithChildren;
const Navigation = ({ children }: INavigation) => {
  return (
    <NavigationProvider>
      <Gnb />
      <Container
        disableGutters
        sx={{
          height: 'calc(100vh - 4.5rem)',
          bgcolor: 'background.default',
          overflow: 'hidden',
        }}
      >
        {children}
      </Container>
      <QuickButton />
    </NavigationProvider>
  );
};

export default Navigation;
