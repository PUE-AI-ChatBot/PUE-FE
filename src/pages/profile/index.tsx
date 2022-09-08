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

import React from 'react';
import Info from '@components/profile/info';
import History from '@components/profile/History';
import Setting from '@components/profile/Setting';

type IProfile = {};
const Profile = ({}: IProfile) => {
  return (
    <>
      <Info />
      <History />
      <Setting />
    </>
  );
};

export default Profile;
