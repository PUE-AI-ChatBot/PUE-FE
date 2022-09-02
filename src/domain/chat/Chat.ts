/**
 * @desc
 *   도메인 객체는 외부로부터 변경 불가능 해야 합니다.
 *   도메인 객체의 생성, 변경, 접근 방법은 단 한 가지 뿐입니다.
 *
 *   도메인 메서드로 도메인 객체의 속성을 변경할 수 있습니다.
 *   오직 Repository 만 도메인 메서드를 사용할 수 있습니다.
 *
 */
import { ChatDirection, ChatProperties } from './ChatTypes';

export class Chat {
  /**
   *
   * @param message 메세지 내용
   * @param direction 송수신 방향
   * @param date 날짜 YYYYMMDDHHMMSS
   * @param id 메세지 id
   * @param userId 유저 id
   * @private
   */
  private constructor(
    private readonly message: string,
    private readonly direction: ChatDirection,
    private readonly date: string,
    private readonly id: number,
    private readonly userId: number,
    private readonly userName: string,
  ) {}

  static fromProperties(properties: ChatProperties) {
    const { message, direction, date, id, userId, userName } = properties;
    return new Chat(message, direction, date, id, userId, userName);
  }

  get properties() {
    return {
      message: this.message,
      direction: this.direction,
      date: this.date,
      id: this.id,
      userId: this.userId,
      userName: this.userName,
    };
  }
}
