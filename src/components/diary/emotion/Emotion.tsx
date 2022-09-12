import { DayEmotion } from '@application/chat/diary/DayResults';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 * emoji 대신 그림 추가
 *  */
type IEmotion = DayEmotion;
export const Emotion = ({ emotion }: IEmotion) => {
  const [emotionEmoji, setEmotionEmoji] = useState('');
  const emotionOption = {
    불만: '😠',
    중립: '🤐',
    당혹: '😧',
    기쁨: '😊',
    걱정: '😰',
    질투: '😖',
    슬픔: '😭',
    죄책감: '😓',
    연민: '🥺',
    분노: '😡',
  };
  useEffect(() => {
    Object.entries(emotionOption).map(([key, val]) =>
      key === emotion ? setEmotionEmoji(val) : null,
    );
  }, []);
  return (
    <Typography sx={{ fontSize: 24, padding: 0 }}>{emotionEmoji}</Typography>
  );
};
