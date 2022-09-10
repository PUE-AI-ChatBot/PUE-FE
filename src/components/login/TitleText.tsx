import { Box, Typography } from '@mui/material';

const TitleText = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography variant={'h3'} sx={{ color: 'primary.main' }}>
        PUE
      </Typography>
      <Typography variant={'subtitle1'} sx={{ color: 'Text.secondary' }}>
        로그인하여 PUE 챗봇 서비스를 이용하세요.
      </Typography>
    </Box>
  );
};

export default TitleText;
