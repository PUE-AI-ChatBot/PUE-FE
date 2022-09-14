import type { NextPage } from 'next';
import { Container } from '@mui/material';
import Diary from '../../components/diary';
import { Charts } from '../../components/charts/Charts';

const CalendarPage: NextPage = () => {
  return (
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
  );
};

export default CalendarPage;
