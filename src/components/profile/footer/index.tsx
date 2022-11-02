import React from 'react';
import { ButtonBase, Stack, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';

type IFooter = {};
const Footer = ({}: IFooter) => {
  const onPolicy = () => {};
  const onLogout = () => {};
  return (
    <Stack direction={'column'} width={1} spacing={'3rem'}>
      <Stack justifyContent={'space-between'} direction={'row'}>
        <ButtonBase sx={{ p: 1 }}>
          <Typography
            onClick={onPolicy}
            sx={{ textDecoration: 'underline' }}
            color={'text.disabled'}
            variant={'body2'}
          >
            서비스 약관
          </Typography>
        </ButtonBase>
        <ButtonBase sx={{ p: 1 }}>
          <button
            type="button"
            onClick={() => signOut()}
            style={{ border: 'none', backgroundColor: 'transparent' }}
          >
            <Typography
              onClick={onLogout}
              sx={{ textDecoration: 'underline' }}
              color={'text.disabled'}
              variant={'body2'}
            >
              로그아웃
            </Typography>
          </button>
        </ButtonBase>
      </Stack>
      <Typography align={'center'} color={'grey.400'} variant={'caption'}>
        Copyright 2022. Team PUE. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
