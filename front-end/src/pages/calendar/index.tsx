import type { NextPage } from 'next';
import { Container } from '@mui/material';
import styled from 'styled-components';
import CharacterContainer from '../../components/character';
import Diary from '../../components/diary';
import MultiSeries from '../../application/chart/MultiSeries';
const Chart = styled.div``;
const CalendarPage: NextPage = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <CharacterContainer />
      <Diary />
    </Container>
  );
};

export default CalendarPage;
