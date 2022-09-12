import React, { useContext } from 'react';
import QuickButton from './QuickButton';
import Gnb from './GNB';
import NavigationProvider, {
  NavigationContext,
  SCREEN_NAME,
} from './NavigationProvider';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';

type INavigation = React.PropsWithChildren;
const Navigation = ({ children }: INavigation) => {
  const [screenName, setScreenName] = useContext(NavigationContext);
  const router = useRouter();

  return (
    <NavigationProvider>
      {router.pathname !== '/enter' ? <Gnb /> : null}
      <Box bgcolor={'background.default'} overflow={'hidden'}>
        <Container
          sx={{
            height: 'calc(100vh - 4.5rem)',
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
