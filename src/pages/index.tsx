import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Stack } from '@mui/system';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Charts } from '@components/charts/Charts';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Main: NextPage = () => {
  const [weekOrMonth, setWeekOrMonth] = useState<boolean>(false);
  const [setting, setSetting] = useState({
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  });
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const toDay = new Date();
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === 'unauthenticated') {
    router.replace('/enter');
    return null;
  }
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'fit-content'}
      overflow={'auto'}
      sx={{ m: '1rem' }}
    >
      <Chip
        icon={<FaceIcon />}
        variant={'outlined'}
        color={'primary'}
        label={
          <Typography color={'text.primary'}>
            안녕하세요. 저는 PUE라고 해요!
          </Typography>
        }
        onClick={handleClick}
        sx={{ width: '320px', height: '50px' }}
      ></Chip>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: '20px',
        }}
      >
        <IconButton
          color="primary"
          aria-label="charactar"
          sx={{
            width: '170px',
            height: '220px',
          }}
          href={'/chat'}
        >
          <Avatar
            src={'/profile.jpg'}
            variant={'rounded'}
            sx={{
              width: '170px',
              height: '220px',
            }}
          ></Avatar>
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 15px',
          }}
        >
          <Typography
            color={'text.primary'}
            sx={{ fontSize: '12px', fontWeight: '600' }}
          >
            Today
          </Typography>
          <Typography
            color={'text.primary'}
            sx={{ fontSize: '14px', fontWeight: '600' }}
          >
            감정 날씨
          </Typography>
          <IconButton color="primary" aria-label="emotionWeather">
            <WbSunnyIcon
              color={'primary'}
              sx={{ width: '60px', height: '60px', marginTop: '5px' }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 5px',
          marginTop: '30px',
        }}
      >
        <Typography color={'text.primary'} sx={{ fontWeight: '600' }}>
          {session?.user?.name}님의 감정 기록
        </Typography>
        <Button
          variant={'contained'}
          onClick={() => setWeekOrMonth(!weekOrMonth)}
          sx={{ width: '35px', height: '25px' }}
        >
          <Typography
            color={'text.primary'}
            sx={{
              color: 'white',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            {weekOrMonth ? 'Month' : 'Week'}
          </Typography>
        </Button>
      </Box>
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '320px',
          height: '280px',
          borderColor: 'primary.light',
          marginTop: '10px',
          paddingBottom: '20px',
        }}
      >
        <Charts date={toDay} />
      </Paper>
    </Stack>
  );
};

export default Main;
