import React, { useContext } from 'react';
import { ButtonBase, Stack, Switch } from '@mui/material';
import SettingItem from '@components/profile/setting/SettingItem';
import {
  HeadsetMic,
  KeyboardArrowRight,
  NightsStayOutlined,
  NotificationsActiveOutlined,
} from '@mui/icons-material';
import { ToggleTheme } from '@helper/styles/defaultStyle';

type ISetting = {};
const Setting = ({}: ISetting) => {
  /**
   * @todo
   *   야간 모드 여부 localstorage 에 저장
   */
  const { toggle, mode } = useContext(ToggleTheme);

  return (
    <Stack width={1} spacing={'1.5rem'}>
      <SettingItem
        leftIcon={<HeadsetMic />}
        handlerBtn={
          <ButtonBase>
            <KeyboardArrowRight />
          </ButtonBase>
        }
        title={'상담사 연결'}
      />
      <SettingItem
        leftIcon={<NightsStayOutlined />}
        handlerBtn={
          <Switch checked={mode == 'dark'} size={'small'} onClick={toggle} />
        }
        title={'야간 모드'}
      />
      <SettingItem
        leftIcon={<NotificationsActiveOutlined />}
        handlerBtn={<Switch size={'small'} />}
        title={'알람 설정'}
      />
    </Stack>
  );
};

export default Setting;
