import { Chat } from '../../domain/chat/Chat';
import { ChatDirection } from '../../domain/chat/ChatTypes';

/**
 *
 * @param message 메세지 내용
 * @param direction 송수신 방향
 * @param date 날짜 YYYYMMDDHHMMSS
 * @param id 메세지 id
 * @param userId 유저 id
 * @private
 */
export interface ChatApiProperty {
  message: string;
  direction: ChatDirection;
  date: string;
  id: number;
  userId: number;
  userName: string;
}

/**
 * @desc Adaptor
 *   Socket Message를 Chat Domain 형식으로 변환 합니다.
 */

export class ChatApi {
  static toDomain(data: ChatApiProperty): Chat {
    return Chat.fromProperties({
      message: data.message,
      direction: data.direction,
      date: data.date,
      id: data.id,
      userId: data.userId,
      userName: data.userName,
    });
  }
}
