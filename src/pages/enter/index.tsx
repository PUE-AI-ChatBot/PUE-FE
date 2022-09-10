import type { NextPage } from 'next';
import { Container } from '@mui/system';
import { Box } from '@mui/material';

import Login from '@components/login/Login';
import TitleText from '@components/login/TitleText';

const EnterPage: NextPage = () => {
  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={2}
        sx={{ bgcolor: 'background.default' }}
      >
        <TitleText />
        <Login loginSite="google" />
        <Login loginSite="kakao" />
      </Box>
    </Container>
  );
};

export default EnterPage;
