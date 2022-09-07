import { Chat } from '@domain/chat/Chat';
import moment, { Moment } from 'moment';

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
  writeAt: Moment;
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
      writeAt: moment(),
      user: {
        name: 'MOCK',
        photo: 'MOCK',
      },
    };
  }

  toMessage(chat: Chat): Message {
    const { message, direction, date, id, userId, userName } = chat.properties;
    return {
      text: message,
      writeAt: date,
      user: {
        name: userName,
        photo: 'MOCK',
      },
    };
  }

  toChat(message: Message): Chat {
    return Chat.fromProperties({
      id: 0,
      userId: 0,
      userName: message.user.name,
      date: message.writeAt,
      message: message.text,
      direction: 'send',
    });
  }
}

export default new MessageAdaptor();
