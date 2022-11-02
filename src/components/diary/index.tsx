import { Charts } from '@components/charts/Charts';
import { MainBox } from '@components/main/boxs';
import { getMonthEmotion } from '@helper/mock';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { DayEmotion } from './emotion/DayEmotion';
import { Emotion } from './emotion/Emotion';
const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

/**
 * @todos
 * 1. Calendar Css 수정 필요 (img 들어가게)
 */

const Diary = () => {
  const [value, setDate] = useState(new Date());
  const toDay = new Date();
  const [emotions, setEmotions] = useState<DayEmotion[]>([]);
  useEffect(() => {
    setEmotions(getMonthEmotion());
  }, []);
  const { data: session, status } = useSession();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={2}
      gap={2}
    >
      <Calendar
        formatDay={(locale: string, date: Date) => moment(date).format('D')}
        value={value}
        onChange={setDate}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        tileContent={({ date }) => {
          return (
            <>
              {emotions.map((x, idx) =>
                x.chatDay === moment(date).format('YYYY-MM-DD') ? (
                  <Emotion key={idx} chatDay={x.chatDay} emotion={x.emotion} />
                ) : null,
              )}
            </>
          );
        }}
      />

      <Box
        display={'flex'}
        width={1}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Typography
          color={'GrayText'}
          variant={'subtitle2'}
          sx={{ display: 'flex', alignItems: 'flex-start' }}
        >
          최근 한달동안 나의 감정기록
        </Typography>
        <Charts date={toDay} />
      </Box>

      <Box sx={{ height: '10vh' }} />
    </Box>
  );
};

export default Diary;
