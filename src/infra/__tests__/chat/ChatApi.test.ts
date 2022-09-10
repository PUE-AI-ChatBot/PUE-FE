import { ChatApi, ChatApiProperty } from '@infra/chat/ChatApi';
import { Chat } from '@domain/chat/Chat';
import moment from 'moment';

describe('class ChatApi', () => {
  const MOCK_API_RES: ChatApiProperty = {
    response: 'res',
    day: '20220911',
    time: '022533',
  };

  const MOCK_CHAT = Chat.fromProperties({
    message: 'text',
    direction: 'send',
    date: moment(),
    id: 0,
    userId: 0,
    userName: 'MOCK',
  });

  it('toDomain()', () => {
    const domain = ChatApi.toDomain(MOCK_API_RES);

    expect(domain).toBeInstanceOf(Chat);
    expect(domain.properties.userName).toBe('PUE');
    expect(domain.properties.message).toBe(MOCK_API_RES.response);
    expect(domain.properties.date.format('HH:mm:ss')).toBe('02:25:33');
  });

  it('toApi', () => {
    const req = ChatApi.toApi(MOCK_CHAT);
    expect(req).toEqual({ message: MOCK_CHAT.properties.message });
  });
});
