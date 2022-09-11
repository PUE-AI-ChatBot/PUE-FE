import messageAdaptor from '@application/chat/Adaptor';
import moment from 'moment';
import { Chat } from '@domain/chat/Chat';

const mockText = 'MOCK_TEXT';
const mockChat = {
  message: mockText,
  direction: 'USER' as const,
  date: moment(),
  id: 0,
  userId: 0,
  userName: 'MOCK_USER_NAME',
};

describe('class MessageAdaptor', () => {
  it('fromText() ', () => {
    const message = messageAdaptor.fromText(mockText);

    expect(message.text).toBe(mockText);
    expect(Object.keys(message.user).length).toBeGreaterThan(0);
    expect(message.writeAt).toBeInstanceOf(moment);
    expect(message.writeAt.isValid()).toBeTruthy();
  });

  it('toMessage()', () => {
    const chat = Chat.fromProperties(mockChat);
    const message = messageAdaptor.toMessage(chat);

    expect(message.text).toBe(mockText);
    expect(message.writeAt).toEqual(chat.properties.date);
    expect(message.user.name).toBe(chat.properties.userName);
    expect(message.user.photo).toBeDefined();
  });
  it('toChat()', () => {
    const message = messageAdaptor.fromText(mockText);
    const { properties } = messageAdaptor.toChat(message);

    expect(properties.date).toEqual(message.writeAt);
    expect(properties.message).toBe(message.text);
    expect(properties.userName).toBe(message.user.name);
  });
});
