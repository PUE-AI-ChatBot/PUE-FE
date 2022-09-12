import type { NextPage } from 'next';
import { Container, Box } from '@mui/material';
import Login from '@components/login/Login';
import TitleText from '@components/login/TitleText';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const EnterPage: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') {
    router.replace('/');
  }
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh',
        gap: 2,
      }}
    >
      {status === 'loading' ? (
        <div> loading... </div>
      ) : (
        <>
          <TitleText />
          <Box display={'grid'} gap={2} mt={4}>
            <Login loginSite="google" />
            <Login loginSite="kakao" />
          </Box>
        </>
      )}
    </Container>
  );
};

export default EnterPage;
