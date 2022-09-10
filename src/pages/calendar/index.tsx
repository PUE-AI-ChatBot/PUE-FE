import type { NextPage } from 'next';
import { Container } from '@mui/material';
import CharacterContainer from '../../components/character';
import Diary from '../../components/diary';
import { Charts } from '../../components/charts/Charts';

const CalendarPage: NextPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
        height: '100vh',
      }}
    >
      <CharacterContainer />
      <Diary />
      <Charts />
    </Container>
  );
};

export default CalendarPage;
