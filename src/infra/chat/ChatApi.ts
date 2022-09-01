import { Chat, ChatDirection } from '../../domain/chat/Chat';

/**
 * Socket Message를 Chat Domain 형식으로 변환 합니다.
 */
export class ChatApi {
  /**
   *
   * @param message 메세지 내용
   * @param direction 송수신 방향
   * @param date 날짜 YYYYMMDDHHMMSS
   * @param id 메세지 id
   * @param userId 유저 id
   * @private
   */
  constructor(
    public readonly message: string,
    public readonly direction: ChatDirection,
    public readonly date: string,
    public readonly id: number,
    public readonly userId: number,
  ) {}

  toDomain(): Chat {
    return Chat.fromProperties({
      message: this.message,
      direction: this.direction,
      date: this.date,
      id: this.id,
      userId: this.userId,
    });
  }
}
