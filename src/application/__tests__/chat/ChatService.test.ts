import chatResource from '@infra/chat/ChatResource';
import adaptor from '@application/chat/Adaptor';
import { ChatService } from '@application/chat/ChatService';

jest.mock('@infra/chat/ChatResource');
const mockedRepository = jest.mocked(chatResource);

const chatService = new ChatService(mockedRepository, adaptor);

describe('class ChatService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('addListener()', () => {
    const mockCallback = jest.fn();
    const spyToMessage = jest.spyOn(adaptor, 'toMessage');

    chatService.addListener(mockCallback);

    expect(mockedRepository.connect).toBeCalledTimes(1);
    expect(mockedRepository.receiveChat).toBeCalledTimes(1);
    expect(mockedRepository.receiveChat).toBeCalledTimes(1);

    expect(spyToMessage).toBeCalledTimes(0);
    expect(mockCallback).not.toBeCalled();
  });

  it('clear()', () => {
    chatService.clear();

    expect(mockedRepository.disConnect).toBeCalledTimes(1);
  });

  it('sendChat()', () => {
    const message = adaptor.fromText('text');
    chatService.sendChat(message);

    expect(mockedRepository.sendChat).toBeCalledTimes(1);
    expect(mockedRepository.sendChat).toBeCalledWith(adaptor.toChat(message));
  });

  it('getChatLog()', async () => {
    const spyToMessage = jest.spyOn(adaptor, 'toMessage');

    mockedRepository.getChatLog.mockImplementation(async () =>
      [1, 2, 3].map(_ => adaptor.toChat(adaptor.fromText('text'))),
    );

    const logs = await chatService.getChatLog();
    expect(Array.isArray(logs)).toBeTruthy();

    expect(mockedRepository.getChatLog).toBeCalled();
    expect(spyToMessage).toBeCalledTimes(3);
  });
});
