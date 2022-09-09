import type { NextPage } from 'next';
import { Container } from '@mui/material';
import CharacterContainer from '../../components/character';
import Diary from '../../components/diary';
import { Charts } from '../../components/charts/Charts';

const CalendarPage: NextPage = () => {
  return (
    <Container sx={{ mt: 2, height: 900 }}>
      <CharacterContainer />
      <Diary />
      <Charts />
    </Container>
  );
};

export default CalendarPage;
