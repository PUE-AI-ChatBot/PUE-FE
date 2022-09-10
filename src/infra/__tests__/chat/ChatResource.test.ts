import { ChatEvent, ChatResource } from '@infra/chat/ChatResource';
import httpClient from '@infra/client/HttpClient';
import socketClient from '@infra/client/SocketClient';
import { ChatApi, ChatApiProperty } from '@infra/chat/ChatApi';
import { Chat } from '@domain/chat/Chat';
import moment from 'moment/moment';

jest.mock('@infra/client/HttpClient');
jest.mock('@infra/client/SocketClient');

const mockedHttpClient = jest.mocked(httpClient);
const mockedSocketClient = jest.mocked(socketClient);
const spyToApi = jest.spyOn(ChatApi, 'toApi');
const spyToDomain = jest.spyOn(ChatApi, 'toDomain');

const chatResource = new ChatResource(httpClient, socketClient);

describe('class ChatResource', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('getChatLog()', async () => {
    const MOCK_RES = [
      {
        response: 'res',
        day: '20220911',
        time: '025033',
      },
    ];
    mockedHttpClient.get.mockImplementation(
      async (): Promise<ChatApiProperty[]> => MOCK_RES,
    );

    const logs = await chatResource.getChatLog(0);

    expect(logs[0]).toBeInstanceOf(Chat);
    expect(spyToDomain).toBeCalledWith(MOCK_RES[0]);
  });

  it('receiveChat()', () => {
    const mockCallback = jest.fn();
    chatResource.receiveChat(mockCallback);

    expect(mockCallback).not.toBeCalled();
    expect(mockedSocketClient.onReceive).toBeCalledWith(
      ChatEvent.receive,
      expect.any(Function),
    );
  });

  it('sendChat()', () => {
    const MOCK_CHAT = Chat.fromProperties({
      message: 'text',
      direction: 'send',
      date: moment(),
      id: 0,
      userId: 0,
      userName: 'MOCK',
    });

    chatResource.sendChat(MOCK_CHAT);

    expect(mockedSocketClient.emitData).toBeCalledWith(
      ChatEvent.send,
      expect.objectContaining({ message: 'text' }),
    );
    expect(spyToApi).toBeCalledTimes(1);
  });

  it('connect()', () => {
    chatResource.connect();
    expect(socketClient.connect).toBeCalledTimes(1);
  });

  it('disConnect()', () => {
    chatResource.disConnect();
    expect(socketClient.disconnect).toBeCalledTimes(1);
  });
});
