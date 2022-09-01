import { MessageRes } from '../application/chat/ChatService';

export const MOCK_MESSAGE: MessageRes = {
  text: 'hello this is mock',
  user: {
    name: 'PUE',
    photo: 'mock photo url',
  },
};
export const MOCK_SEND_MESSAGE: MessageRes = {
  text: 'hello?',
  user: {
    name: 'YOU',
    photo: 'mock photo url',
  },
};
