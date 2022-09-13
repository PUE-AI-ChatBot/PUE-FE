import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ProfileAvatar from '@components/avatar/ProfileAvatar';

type IMeta = {
  nickName?: string | null;
  userName?: string | null;
  register: string;
};

const Meta = ({ nickName, userName, register }: IMeta) => {
  return (
    <Stack direction={'row'} position={'relative'}>
      <Box
        position={'absolute'}
        width={'20rem'}
        bgcolor={'primary.main'}
        borderRadius={'10rem'}
        top={'-8rem'}
        ml={'6rem'}
        height={'20rem'}
      />
      <Box
        p={0.7}
        bgcolor={'background.paper'}
        width={'fit-content'}
        borderRadius={'50%'}
        zIndex={0}
      >
        <ProfileAvatar length={'9rem'} />
      </Box>
      <Stack
        spacing={'0.3rem'}
        justifyContent={'center'}
        position={'relative'}
        ml={'2rem'}
      >
        <Typography
          variant={'h4'}
          color={'grey.50'}
          fontWeight={'bold'}
          sx={{ wordBreak: 'break-word' }}
        >
          {nickName}
        </Typography>
        <Typography variant={'h6'} color={'grey.200'}>
          {userName}
        </Typography>
        <Typography
          variant={'body2'}
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
