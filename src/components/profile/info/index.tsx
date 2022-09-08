import React from 'react';
import { Box } from '@mui/material';
import Meta from '@components/profile/info/meta';

const Info = () => {
  /**
   * @todo
   *   User domain 상태 관리
   */
  return (
    <div>
      <Box
        position={'absolute'}
        width={'26rem'}
        bgcolor={'primary.main'}
        borderRadius={'13rem'}
        top={'-5rem'}
        ml={'8rem'}
        height={'26rem'}
        zIndex={0}
      />
      <Meta
        nickName={'테스트 닉네임'}
        userName={'Kim So Hee'}
        register={'2022. 09. 09'}
      />
    </div>
  );
};

export default Info;
