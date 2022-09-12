import { Charts } from '@components/charts/Charts';
import {
  DayEmotion,
  getDayEmotion,
} from '@components/diary/emotion/DayResults';
import { Box } from '@mui/material';
import moment from 'moment';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Emotion } from './emotion/Emotion';
const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

/**
 * @todos
 * 1. Calendar Css 수정 필요 (img 들어가게)
 */

const Diary = () => {
  const [value, setDate] = useState(new Date());
  const [emotions, setEmotions] = useState<DayEmotion[]>([]);
  useEffect(() => {
    setEmotions(getDayEmotion());
  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={4}>
      <Calendar
        formatDay={(locale: string, date: Date) => moment(date).format('D')}
        value={value}
        onChange={setDate}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        locale="ENG"
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
      <Charts date={value} />
    </Box>
  );
};

export default Diary;
