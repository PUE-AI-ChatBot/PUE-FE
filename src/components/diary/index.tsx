import { Box, Typography, styled } from '@mui/material';
import moment from 'moment';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { DayEmotion, getDayEmotion } from '../../application/diary/DayResults';
import { Emotion } from './Emotion';
const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

/**
 * @todos
 * 1. Calendar Css 수정 필요 (img 들어가게)
 * 2. 서버로 부터 해당 일에 대한 감정, 채팅 내역을 불러 오게
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
              {emotions.map(x =>
                x.chatDay === moment(date).format('YYYY-MM-DD') ? (
                  <Emotion chatDay={x.chatDay} emotion={x.emotion} />
                ) : null,
              )}
            </>
          );
        }}
      />
      <Typography color={'GrayText'}> {value.toDateString()}</Typography>
    </Box>
  );
};

export default Diary;
