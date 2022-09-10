import React from 'react';
import { Box } from '@mui/material';
import Meta from '@components/profile/info/meta';

const Info = () => {
  /**
   * @todo
   *   User domain 상태 관리
   */
  return (
    <Box mt={'4rem'} mb={'2rem'} width={'27rem'}>
      <Meta
        nickName={'PUE__'}
        userName={'Kim So Hee'}
        register={'2022. 09. 09'}
      />
    </Box>
  );
};

export default Info;
