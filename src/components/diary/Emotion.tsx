import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DayEmotion } from '../../application/diary/DayResults';

/**
 *
 * emoji 대신 그림 추가
 *  */
type IEmotion = DayEmotion;
export const Emotion = ({ emotion }: IEmotion) => {
  const [emotionEmoji, setEmotionEmoji] = useState('');
  useEffect(() => {
    if (emotion === '기쁨') {
      setEmotionEmoji('😀');
    } else if (emotion === '불안') {
      setEmotionEmoji('😰');
    } else if (emotion === '분노') {
      setEmotionEmoji('😡');
    } else if (emotion === '슬픔') {
      setEmotionEmoji('😭');
    }
  }, []);
  return (
    <Typography sx={{ fontSize: 24, padding: 0 }}>{emotionEmoji}</Typography>
  );
};
