/* eslint-disable @typescript-eslint/indent */
/**
 * 고려 사항
 *  1. 다크모드
 *  2. 반응형 (폰트 사이즈)
 *  3. 커스텀 테마
 *    - https://bareynol.github.io/mui-theme-creator/
 *
 * .palette
 * .typography
 * .spacing
 * .breakpoints
 * .zIndex
 * .transitions
 * .components
 */
import { createTheme, PaletteMode } from '@mui/material';
import { createContext } from 'react';

export default function (mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        light: '#ABB3E2',
        main: '#7986cb',
      },
      secondary: {
        main: '#ff9e80',
      },
      ...(mode == 'light'
        ? {
            background: {
              default: '#fafafa',
              paper: '#fff',
            },
          }
        : {
            background: {
              default: '#282828',
              paper: '#464646',
            },
          }),
    },
  });
}

type IToggleTheme = { toggle: () => void; mode: PaletteMode };
export const ToggleTheme = createContext<IToggleTheme>(
  null as unknown as IToggleTheme,
);

/**
 * 반응형
 * options: breakpoints, disableAlign, factor, variants
 */
/*theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme = responsiveFontSizes(theme, {});*/
