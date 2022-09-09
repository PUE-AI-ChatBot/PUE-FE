import React from 'react';
import { ButtonBase, Stack, Typography } from '@mui/material';

type IFooter = {};
const Footer = ({}: IFooter) => {
  const onPolicy = () => {};
  const onLogout = () => {};
  return (
    <Stack direction={'column'} width={1} spacing={'5rem'}>
      <Stack justifyContent={'space-between'} direction={'row'}>
        <ButtonBase sx={{ p: 1 }}>
          <Typography
            onClick={onPolicy}
            sx={{ textDecoration: 'underline' }}
            color={'text.disabled'}
          >
            서비스 약관
          </Typography>
        </ButtonBase>
        <ButtonBase sx={{ p: 1 }}>
          <Typography
            onClick={onLogout}
            sx={{ textDecoration: 'underline' }}
            color={'text.disabled'}
          >
            로그아웃
          </Typography>
        </ButtonBase>
      </Stack>
      <Typography align={'center'} color={'grey.400'}>
        Copyright 2022. Team PUE. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
