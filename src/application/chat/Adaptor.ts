import { Chat } from '../../domain/chat/Chat';

/**
 * @todo
 *   create User Domain, Repository, Resource, Service
 */
interface User {
  name: string;
  photo: string;
}

export interface Message {
  text: string;
  writeAt?: Date;
  user: User;
}

export class MessageAdaptor {
  constructor(private readonly userRepository: Record<string, unknown> = {}) {}

  /**
   * @todo
   *   User Resource inject
   *   MOCK remove
   */

  fromText(text: string): Message {
    return {
      text,
      writeAt: new Date(),
      user: {
        name: 'MOCK',
        photo: 'MOCK',
      },
    };
  }

  toMessage(chat: Chat): Message {
    const { message, direction, date, id, userId } = chat.properties;
    return {
      text: message,
      writeAt: new Date(date),
      user: {
        name: 'MOCK',
        photo: 'MOCK',
      },
    };
  }

  toChat(message: Message): Chat {
    return Chat.fromProperties({
      id: 0,
      userId: 0,
      userName: message.user.name,
      date: 'MOCK',
      message: message.text,
      direction: 'send',
    });
  }
}

export default new MessageAdaptor();
