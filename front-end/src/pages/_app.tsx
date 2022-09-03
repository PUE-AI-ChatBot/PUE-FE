import type { AppProps } from 'next/app';
<<<<<<< HEAD:src/pages/_app.tsx
import '../../styles/globals.css';
import '../../styles/calendar.css';
=======
import '../styles/globals.css';
import '../styles/calendar.css';
>>>>>>> c7a78574735642dea61b1ef5e7cc35aa58a145f1:front-end/src/pages/_app.tsx
import Navigation from '../application/navigation';
import { CssBaseline } from '@mui/material';

function App({ Component, pageProps }: AppProps) {
  return (
    <Navigation>
      <CssBaseline />
      <Component {...pageProps} />
    </Navigation>
  );
}

export default App;
