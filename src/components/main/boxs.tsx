import { Stack, Box, SxProps, Theme } from '@mui/material';
import React from 'react';

interface IBox {
  flexDirection?: 'row' | 'column';
  width: number | string;
  height?: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

interface IWrapper {
  children: React.ReactNode;
}

/**
 * width, height 를 이용하여 박스 생성
 * @param flexDirection 'row' | 'column' | undefined
 * @param width number | string
 * @param height string
 * @returns
 */
export const MainBox = ({
  flexDirection = 'column',
  width,
  height,
  sx,
  children,
}: IBox) => {
  return (
    <Box
      display={'flex'}
      flexDirection={flexDirection}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={2}
      width={width}
      height={height}
      gap={1}
      bgcolor={'#ffffff'}
      boxShadow={2}
      paddingY={1}
      paddingX={2}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export const HalfBoxWrapper = ({ children }: IWrapper) => {
  return (
    <Stack
      direction={'row'}
      width={'90vw'}
      justifyContent={'space-between'}
      gap={2}
    >
      {children}
    </Stack>
  );
};
