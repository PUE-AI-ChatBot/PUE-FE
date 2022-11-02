import React, { useState } from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';

type IItem = {
  leftIcon: React.ReactNode;
  handlerBtn: React.ReactNode;
  title: string;
};
const SettingItem = ({ leftIcon, handlerBtn, title }: IItem) => {
  const [raised, setRaised] = useState(false);

  return (
    <Card
      raised={raised}
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction={'row'} spacing={'0.8rem'} alignItems={'center'}>
          {leftIcon}
          <Typography color={'text.primary'}>{title}</Typography>
        </Stack>
        {handlerBtn}
      </Box>
    </Card>
  );
};

export default SettingItem;
