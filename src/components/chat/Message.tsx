import React from 'react';
import { MessageRes } from '../../application/chat/ChatService';
import { Avatar, Box, Paper, Typography } from '@mui/material';

type IMessage = MessageRes;

export const MessageLeft = ({ text }: IMessage) => {
  return (
    <Box display={'flex'} columnGap={1.5} pt={2}>
      <Avatar sx={{ width: 48, height: 48 }}>퓨이</Avatar>
      <Box mt={1}>
        <Typography color={'gray'}>퓨이</Typography>
        <Paper
          elevation={2}
          sx={{
            width: 'fit-content',
            p: 1.5,
            borderRadius: 6,
            borderTopLeftRadius: 0,
          }}
        >
          <Typography>{text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};
export const MessageRight = ({ text }: IMessage) => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Box pt={2}>
        <Paper
          elevation={2}
          sx={{
            width: 'fit-content',
            p: 1.5,
            borderRadius: 6,
            borderTopRightRadius: 0,
            bgcolor: 'royalblue',
          }}
        >
          <Typography color={'white'}>{text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};
