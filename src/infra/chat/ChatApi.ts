import { Chat } from '@domain/chat/Chat';
import moment from 'moment';
import { ChatDirection } from '@domain/chat/ChatTypes';

/**
 * @property {string} response 응답 메세지
 * @property {string} day YYYYMMDD
 * @property {string} time HHMMSS
 *
 * @todo
 *   socket, http api 응답 형식이 다름
 *   socket : response
 *   http : utterance
 */
export interface ChatApiProperty {
  response: string;
  utterance?: string;
  day: string;
  time: string;
  direction?: ChatDirection;
}

/**
 * @desc Adaptor
 *   Socket Message를 Chat Domain 형식으로 변환 합니다.
 */

export class ChatApi {
  static toDomain(data: ChatApiProperty): Chat {
    return Chat.fromProperties({
      message: data.utterance || data.response,
      direction: data.direction || 'BOT',
      /**
       * @todo
       *   server invalid date
       */
      date: moment(data.day + 'T' + data.time),
      id: 0,
      userId: 0,
      userName: 'PUE',
    });
  }

  static toApi({ properties }: Chat): { message: string } {
    return {
      message: properties.message,
    };
  }
}
