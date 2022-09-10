import { Chat } from '@domain/chat/Chat';
import moment from 'moment';

/**
 * @property {string} response 응답 메세지
 * @property {string} day YYYYMMDD
 * @property {string} time HHMMSS
 */
export interface ChatApiProperty {
  response: string;
  day: string;
  time: string;
}

/**
 * @desc Adaptor
 *   Socket Message를 Chat Domain 형식으로 변환 합니다.
 */

export class ChatApi {
  static toDomain(data: ChatApiProperty): Chat {
    return Chat.fromProperties({
      message: data.response,
      direction: 'receive',
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
