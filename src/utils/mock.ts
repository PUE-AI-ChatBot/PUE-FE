import { Message } from '@application/chat/Adaptor';

export const MOCK_MESSAGE: Message = {
  text: 'hello this is mock',
  user: {
    name: 'PUE',
    photo: 'mock photo url',
  },
};
export const MOCK_SEND_MESSAGE: Message = {
  text: 'hello?',
  user: {
    name: 'YOU',
    photo: 'mock photo url',
  },
};
