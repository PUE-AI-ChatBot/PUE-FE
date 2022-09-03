import { Paper } from '@mui/material';
import React from 'react';

interface CharacterMessage {
  isFirst?: boolean;
  message: string;
  userName: string;
}

/**
 * @todo
 * interface 수정
 * 서버에서 message를 사용자의 데이터에 따라 message를 받아오게
 */
const CharacterMessage = ({ isFirst, message, userName }: CharacterMessage) => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: 'fit-content',
        height: 'fit-content',
        p: 1.5,
        mt: 5,
        borderRadius: 6,
        borderTopLeftRadius: 0,
      }}
    >
      Hello! My name is PUE!
    </Paper>
  );
};

export default CharacterMessage;
