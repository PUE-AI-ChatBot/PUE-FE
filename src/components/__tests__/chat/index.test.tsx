import { render, screen, waitFor } from '@testing-library/react';
import { chatService } from '@application/chat/ChatService';
import ChatContainer from '@components/chat';
import adaptor from '@application/chat/Adaptor';
import { ChatApi } from '@infra/chat/ChatApi';
import userEvent from '@testing-library/user-event';

jest.mock('@application/chat/ChatService');
const mockedChatService = jest.mocked(chatService);

describe('<ChatContainer/>', () => {
  describe('mount', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('init ChatService', () => {
      render(<ChatContainer />);

      expect(mockedChatService.addListener).toBeCalledTimes(1);
      expect(mockedChatService.addListener).toBeCalledWith(
        expect.any(Function),
      );
    });

    it('get chatting logs', async () => {
      mockedChatService.getChatLog.mockReturnValue(Promise.resolve([]));

      render(<ChatContainer />);

      expect(mockedChatService.getChatLog).toBeCalledTimes(1);
      await expect(mockedChatService.getChatLog()).resolves.toEqual([]);
    });
  });

  describe('unmount', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('clear ChatService', () => {
      const { unmount } = render(<ChatContainer />);
      unmount();
      expect(mockedChatService.clear).toBeCalledTimes(1);
    });
  });

  describe('chat logic', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      mockedChatService.getChatLog.mockReturnValue(
        Promise.resolve([
          adaptor.fromText('right'),
          adaptor.toMessage(
            ChatApi.toDomain({
              response: 'left',
              time: '173322',
              day: '20220911',
            }),
          ),
        ]),
      );
    });

    it('should render <Message/> if chat logs exists', async () => {
      render(<ChatContainer />);

      expect(mockedChatService.getChatLog).toBeCalledTimes(1);

      await screen.findByText('right');
      await screen.findByText('left');
      await waitFor(() =>
        expect(screen.queryByText('not')).not.toBeInTheDocument(),
      );
    });

    it('should render <MessageRight/> if user send chat', async () => {
      render(<ChatContainer />);

      const input = screen.getByPlaceholderText('메세지를 입력해 주세요.');

      await userEvent.type(input, 'send{enter}');

      expect(mockedChatService.sendChat).toBeCalledTimes(1);
      expect(mockedChatService.sendChat.mock.calls[0][0]).toEqual(
        expect.objectContaining({
          text: 'send',
        }),
      );

      await screen.findByText('right');

      const message = await screen.findByText('send');
      expect(message).toHaveStyle('color: white');
    });

    it('should render <MessageLeft/> if chatbot send chat', () => {
      /**
       * @todo
       *   chatbot (server side socket) send message
       */
    });
  });
});
