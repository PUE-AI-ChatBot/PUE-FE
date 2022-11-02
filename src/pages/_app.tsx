import type { AppProps } from 'next/app';
import '@helper/styles/globals.css';
import '@helper/styles/calendar.css';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import createTheme, { ToggleTheme } from '@helper/styles/defaultStyle';
import React, { useMemo, useState } from 'react';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = useMemo(() => createTheme(mode), [mode]);
  return (
    <ToggleTheme.Provider
      /* 리렌더링 확인 필요 */
      value={{
        toggle: () => setMode(mode == 'light' ? 'dark' : 'light'),
        mode,
      }}
    >
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <CssBaseline />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </ToggleTheme.Provider>
  );
}

export default App;
