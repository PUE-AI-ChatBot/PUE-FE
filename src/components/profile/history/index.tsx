import React from 'react';
import { Stack } from '@mui/material';
import Count from '@components/profile/history/Count';

type IHistory = {};
const History = ({}: IHistory) => {
  /**
   * @todo
   *   user domain connect
   */
  return (
    <Stack direction={'row'} width={1} justifyContent={'space-between'}>
      <Count title={'채팅 횟수'} count={7} />
      <Count title={'상담 횟수'} count={4} />
    </Stack>
  );
};

export default History;
