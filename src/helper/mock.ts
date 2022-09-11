import { StatisticsResult } from '@application/chart/Series';
import { Message } from '@application/chat/Adaptor';
import moment from 'moment';

export const MOCK_MESSAGE: Message = {
  writeAt: moment(),
  text: 'hello this is mock',
  user: {
    name: 'PUE',
    photo: 'mock photo url',
  },
};
export const MOCK_SEND_MESSAGE: Message = {
  writeAt: moment(),
  text: 'hello?',
  user: {
    name: 'YOU',
    photo: 'mock photo url',
  },
};

export const MOCK_STATISTICS: StatisticsResult = {
  option: 'donut',
  statistics: {
    불안: 2,
    중립: 0,
    당혹: 5,
    기쁨: 0,
    걱정: 0,
    질투: 2,
    슬픔: 0,
    죄책감: 0,
    연민: 0,
  },
};
