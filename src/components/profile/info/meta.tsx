import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ProfileAvatar from '@components/Avatar/ProfileAvatar';

type IMeta = { nickName: string; userName: string; register: string };

const Meta = ({ nickName, userName, register }: IMeta) => {
  return (
    <Stack
      direction={'row'}
      spacing={'2rem'}
      py={'4rem'}
      zIndex={1}
      position={'relative'}
    >
      <Box
        p={0.7}
        bgcolor={'background.paper'}
        width={'fit-content'}
        borderRadius={'50%'}
      >
        <ProfileAvatar length={'16rem'} />
      </Box>
      <Stack spacing={'0.7rem'} justifyContent={'center'}>
        <Typography variant={'h4'} color={'grey.50'} fontWeight={'bold'}>
          {nickName}
        </Typography>
        <Typography variant={'h6'} color={'grey.200'}>
          {userName}
        </Typography>
        <Typography
          variant={'body1'}
          pt={'1rem'}
          color={'grey.300'}
          boxSizing={'border-box'}
          fontStyle={'italic'}
        >
          {register} 가입
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Meta;
