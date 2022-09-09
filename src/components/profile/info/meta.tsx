import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ProfileAvatar from '@components/avatar/ProfileAvatar';

type IMeta = { nickName: string; userName: string; register: string };

const Meta = ({ nickName, userName, register }: IMeta) => {
  return (
    <Stack direction={'row'} spacing={'2rem'} position={'relative'}>
      <Box
        position={'absolute'}
        width={'26rem'}
        bgcolor={'primary.main'}
        borderRadius={'13rem'}
        top={'-11rem'}
        ml={'8rem'}
        height={'26rem'}
      />
      <Box
        p={0.7}
        bgcolor={'background.paper'}
        width={'fit-content'}
        borderRadius={'50%'}
      >
        <ProfileAvatar length={'12rem'} />
      </Box>
      <Stack spacing={'0.3rem'} justifyContent={'center'} position={'relative'}>
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
