import type { NextPage } from 'next';
import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';
import Login from '@components/login/Login';
import TitleText from '@components/login/TitleText';

const EnterPage: NextPage = () => {
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
      <TitleText />

      <Box display={'grid'} gap={2} mt={4}>
        <Login loginSite="google" />
        <Login loginSite="kakao" />
      </Box>
    </Container>
  );
};

export default EnterPage;
