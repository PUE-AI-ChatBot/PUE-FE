import React, { useContext } from 'react';
import { ArrowBackOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Link from 'next/link';
import { NavigationContext, SCREEN_NAME } from './NavigationProvider';

function ElevationScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Gnb = () => {
  const [screenName, setScreenName] = useContext(NavigationContext);
  return (
    <ElevationScroll>
      <AppBar
        position={'sticky'}
        sx={{
          height: '4.5rem',
        }}
      >
        <Toolbar sx={{ width: 1, margin: 'auto' }}>
          <Box width={1}>
            {screenName !== SCREEN_NAME.home && (
              <Button
                color={'inherit'}
                onClick={() => setScreenName(SCREEN_NAME.home)}
              >
                <Link href={'/'}>
                  <ArrowBackOutlined fontSize={'large'} />
                </Link>
              </Button>
            )}
          </Box>

          <Box justifyContent={'center'} width={1} display={'flex'}>
            <Typography color={'white'} variant={'h5'}>
              {screenName}
            </Typography>
          </Box>
          <Box width={1} display={'flex'} justifyContent={'flex-end'}>
            <IconButton
              onClick={() => setScreenName(SCREEN_NAME.profile)}
              size="large"
              color="inherit"
            >
              <Link href={'/profile'}>
                <PersonOutlineOutlined fontSize={'large'} />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Gnb;
