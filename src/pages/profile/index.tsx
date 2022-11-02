/**
 * 기능
 * 1. 프로필 사진, 내 이름, 닉네임
 * 2. 내 총 채팅 횟수, 상담 횟수 (누르면 로그 팝업)
 * 3. 푸시 알람 스위치
 * 4. 다크 모드 스위치
 * 5. 로그아웃 버튼
 * 6?. 서비스 policy
 * 7?. 2차 비밀번호 설정
 */

import React, { useEffect } from 'react';
import Info from '@components/profile/info';
import History from '@components/profile/history';
import Setting from '@components/profile/setting';
import Footer from '@components/profile/footer';
import { Box, Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

type IProfile = {};
const Profile = ({}: IProfile) => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/enter');
    }
  }, [status]);

  return (
    <Box width={1} sx={{ overflowX: 'hidden' }}>
      <Stack
        width={'fit-content'}
        spacing={'2.5rem'}
        pb={'7rem'}
        margin={'auto'}
      >
        <Info />
        <History />
        <Setting />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Profile;
