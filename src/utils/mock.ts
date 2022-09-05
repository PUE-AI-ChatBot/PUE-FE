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
