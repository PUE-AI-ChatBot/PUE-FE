import { ArrowBackOutlined } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BackArrow = () => {
  return (
    <Box sx={{ top: 0, left: 0 }}>
      <Link href={'/'}>
        <Button color={'inherit'}>
          <ArrowBackOutlined fontSize={'large'} />
        </Button>
      </Link>
    </Box>
  );
};

export default BackArrow;
