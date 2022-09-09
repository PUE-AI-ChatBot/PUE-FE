import * as React from 'react';
import { Box } from '@mui/material';
import CharacterMessage from './message';

/**
 *
 * @returns Container (Character Box, Message Box)
 */
const CharacterContainer = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box
        sx={{
          mr: 5,
          width: 100,
          height: 100,
          border: 1,
          borderRadius: 2,
          borderColor: 'black',
        }}
      />
      <CharacterMessage isFirst userName="PUE" message="Hello!" />
    </Box>
  );
};

export default CharacterContainer;
