import { ChatRepository } from '../../domain/chat/ChatRepository';
import chatResource from '../../infra/chat/ChatResource';
import { MOCK_MESSAGE } from '../../utils/mock';

interface User {
  name: string;
  photo: string;
}

export interface MessageRes {
  text: string;
  writeAt?: Date;
  user: User;
}

class ChatService {
  private listeners = [];

  constructor(
    private chatRepository: ChatRepository,
    private userRepository: Record<string, unknown> = {},
  ) {}

  /**
   * @todo
   *   listener 처리
   *   user domain, repository, resource 생성
   */
  addListener(cb: (...args: any[]) => any) {}

  clear() {
    this.listeners = [];
  }

  async sendChat(message: string) {
    const chat = await this.chatRepository.sendChat(message, 0);
    return chat;
  }

  async getChatLog() {
    const ret = Array(4)
      .fill(null)
      .map(() => MOCK_MESSAGE);

    const logs = await this.chatRepository.getChatLog(0);
    return ret;
  }
}

// singleton instance
export const chatService = new ChatService(chatResource);
