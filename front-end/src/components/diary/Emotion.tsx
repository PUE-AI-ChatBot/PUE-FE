import { Box, Typography } from '@mui/material';
import { padding } from '@mui/system';
import { DayEmotion } from '../../application/diary/DayResults';

/**
 *
 * emoji 대신 그림 추가
 *  */
type IEmotion = DayEmotion;
export const Emotion = ({ emotion }: IEmotion) => {
  return (
    <Typography sx={{ fontSize: 24, padding: 0 }}>
      {emotion === '기쁨' ? '😀' : '불안' ? '😰' : null}
    </Typography>
  );
};
