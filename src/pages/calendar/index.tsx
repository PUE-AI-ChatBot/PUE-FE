import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Diary from '../../components/diary';
import Layout from '@components/navigation/layout';

const CalendarPage: NextPage = () => {
  return (
    <Layout hasHeaderBar backArrow profileButton hasQuickButton>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Diary />
      </Container>
    </Layout>
  );
};

export default CalendarPage;
