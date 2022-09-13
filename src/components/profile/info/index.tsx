import React from 'react';
import { Box } from '@mui/material';
import Meta from '@components/profile/info/meta';
import { useSession } from 'next-auth/react';

const Info = () => {
  /**
   * @todo
   *   User domain 상태 관리
   */
  const { data: session, status } = useSession();

  return (
    <Box mt={'4rem'} mb={'2rem'} width={'27rem'}>
      <Meta
        nickName={session?.user?.name}
        userName={session?.user?.name}
        register={'2022. 09. 09'}
      />
    </Box>
  );
};

export default Info;
