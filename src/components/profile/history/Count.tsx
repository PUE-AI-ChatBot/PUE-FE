import React, { useState } from 'react';
import {
  Box,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

type ICount = { title: string; count: number };

/**
 * @todo
 *   add callback function parameter
 *
 * @param title Card header
 * @param count
 * @constructor
 */
const Count = ({ title, count }: ICount) => {
  const [raised, setRaised] = useState(false);
  return (
    <Card
      raised={raised}
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
      sx={{
        width: '10rem',
        p: '1.2rem',
        borderRadius: '1rem',
      }}
    >
      <CardContent
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography color={'text.secondary'} mb={'1rem'}>
          {title}
        </Typography>
        <Box alignSelf={'center'}>
          <Typography component={'span'} variant={'h3'}>
            {count}
          </Typography>
          <Typography component={'span'}> 번</Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{ p: 0, mt: '1rem', display: 'flex', justifyContent: 'flex-end' }}
      >
        <ButtonBase>
          <Typography
            variant={'caption'}
            color={'text.disabled'}
            sx={{ textDecoration: 'underline' }}
          >
            자세히 보기
          </Typography>
        </ButtonBase>
      </CardActions>
    </Card>
  );
};

export default Count;
