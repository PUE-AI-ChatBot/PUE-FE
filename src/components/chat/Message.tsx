import React, { memo } from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { Message } from '@application/chat/Adaptor';

type IMessage = Message;

export const MessageLeft = memo(({ text, writeAt }: IMessage) => {
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
      <Typography color={'gray'} alignItems={'flex-end'} display={'flex'}>
        {writeAt.isValid() && writeAt.format('HH:mm')}
      </Typography>
    </Box>
  );
});
export const MessageRight = memo(({ text, writeAt }: IMessage) => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Typography
        color={'gray'}
        alignItems={'flex-end'}
        display={'flex'}
        mx={'0.5rem'}
      >
        {writeAt?.format('HH:mm')}
      </Typography>
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
});
