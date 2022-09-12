import React, { useCallback, useContext, useState } from 'react';
import { Backdrop, Box, Fab, useTheme } from '@mui/material';
import {
  Add,
  HomeOutlined,
  MessageOutlined,
  TodayOutlined,
} from '@mui/icons-material';
import Link from 'next/link';
import { NavigationContext, SCREEN_NAME } from './NavigationProvider';

const wrapStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: 1,
  height: 100,
  justifyContent: 'center',
  alignItems: 'flex-end',
  justifySelf: 'center',
  position: 'fixed',
  bottom: 20,
};

const QuickButton = () => {
  const { palette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);
  const [screenName, setScreenName] = useContext(NavigationContext);

  const handleQB = useCallback(
    (name: string) => {
      setScreenName(name);
      setIsOpen(false);
    },
    [setScreenName],
  );

  return screenName !== SCREEN_NAME.chat ? (
    <Box sx={wrapStyle}>
      <Backdrop open={isOpen} onClick={toggleOpen} />
      {isOpen && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            bottom: 80,
            position: 'fixed',
            gap: 2,
          }}
        >
          <Link href={'/'}>
            <Fab
              size={'medium'}
              sx={{ bgcolor: palette.primary.light }}
              onClick={() => handleQB(SCREEN_NAME.home)}
            >
              <HomeOutlined sx={{ color: '#FFF' }} />
            </Fab>
          </Link>
          <Link href={'/chat'}>
            <Fab
              size={'medium'}
              sx={{ bgcolor: palette.primary.light, top: -20 }}
              onClick={() => handleQB(SCREEN_NAME.chat)}
            >
              <MessageOutlined sx={{ color: '#FFF' }} />
            </Fab>
          </Link>
          <Link href={'/calendar'}>
            <Fab
              size={'medium'}
              sx={{ bgcolor: palette.primary.light }}
              onClick={() => handleQB(SCREEN_NAME.calendar)}
            >
              <TodayOutlined sx={{ color: '#FFF' }} />
            </Fab>
          </Link>
        </Box>
      )}
      <Fab onClick={toggleOpen} size={'large'} color={'primary'}>
        <Add />
      </Fab>
    </Box>
  ) : null;
};

export default QuickButton;
