import type { AppProps } from 'next/app';
import '@helper/styles/globals.css';
import Navigation from '@components/navigation';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import createTheme from '@helper/styles/defaultStyle';
import React, { createContext, useMemo, useState } from 'react';

type IToggleTheme = { toggle: () => void };
const ToggleTheme = createContext<IToggleTheme>(
  null as unknown as IToggleTheme,
);

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = useMemo(() => createTheme(mode), [mode]);
  return (
    <ToggleTheme.Provider
      /* 리렌더링 확인 필요 */
      value={{
        toggle: () => setMode(mode == 'light' ? 'dark' : 'light'),
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </ThemeProvider>
    </ToggleTheme.Provider>
  );
}

export default App;
