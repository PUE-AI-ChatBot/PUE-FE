import { ChatRepository } from '@domain/chat/ChatRepository';
import chatResource from '@infra/chat/ChatResource';
import { MOCK_MESSAGE, MOCK_SEND_MESSAGE } from '@helper/mock';
import adaptor, { Message, MessageAdaptor } from './Adaptor';

export class ChatService {
  constructor(
    private chatRepository: ChatRepository,
    private messageAdaptor: MessageAdaptor,
    private userRepository: Record<string, unknown> = {},
  ) {}

  /**
   * @todo
   *   user domain, repository, resource 생성
   *   import absolute path 설정
   */
  addListener(cb: (message: Message) => any) {
    this.chatRepository.connect();
    this.chatRepository.receiveChat(chat =>
      cb(this.messageAdaptor.toMessage(chat)),
    );
  }

  clear() {
    this.chatRepository.disConnect();
  }

  sendChat(message: Message) {
    this.chatRepository.sendChat(this.messageAdaptor.toChat(message));
  }

  async getChatLog() {
    const ret = Array(4)
      .fill(null)
      .map(() => MOCK_MESSAGE)
      .concat(MOCK_SEND_MESSAGE);

    // const logs = await this.chatRepository.getChatLog(0);
    // const temp = logs.map(chat => this.messageAdaptor.toMessage(chat));
    return ret;
  }
}

// singleton instance
export const chatService = new ChatService(chatResource, adaptor);
