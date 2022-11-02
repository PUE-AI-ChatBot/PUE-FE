import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';

type ILoginSite = { loginSite: 'google' | 'kakao' };
const Login = ({ loginSite }: ILoginSite) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      {loginSite === 'google' ? (
        <Button
          variant={'contained'}
          size={'large'}
          sx={{ width: '90vw', height: 56, bgcolor: '#fff' }}
          onClick={() =>
            signIn('google', { callbackUrl: 'https://pue.restinroi.com/' })
          }
        >
          <SvgIcon viewBox={'0 0 48 48'} sx={{ mr: 3, color: 'black' }}>
            <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </SvgIcon>
          <Typography variant={'h5'} sx={{ color: 'black' }}>
            구글로 로그인
          </Typography>
        </Button>
      ) : (
        <Button
          variant={'contained'}
          size={'large'}
          sx={{ width: '90vw', height: 56, bgcolor: '#f9e000' }}
          onClick={() =>
            signIn('kakao', { callbackUrl: 'https://pue.restinroi.com/' })
          }
        >
          <SvgIcon viewBox={'0 0 512 512'} sx={{ mr: 3, color: 'black' }}>
            <path
              fill="black"
              d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
            />
          </SvgIcon>
          <Typography variant={'h5'} sx={{ color: 'black' }}>
            카카오로 로그인
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default Login;
