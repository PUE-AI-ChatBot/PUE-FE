import React from 'react';
import { Avatar } from '@mui/material';

type IProfileAvatar = { src?: string; length: string };
const ProfileAvatar = ({ src, length }: IProfileAvatar) => {
  return (
    <Avatar
      sx={{ width: length, height: length }}
      src={src || '/profile.jpg'}
    />
  );
};

export default ProfileAvatar;
