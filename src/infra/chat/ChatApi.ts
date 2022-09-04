import { Chat } from '../../domain/chat/Chat';

/**
 * @property {string} response 응답 메세지
 * @property {string} day YYYYMMDD
 * @property {number} time 시분 (@todo 현재는 타임스탬프)
 */
export interface ChatApiProperty {
  response: string;
  day: string;
  time: number;
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
      date: data.day,
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
