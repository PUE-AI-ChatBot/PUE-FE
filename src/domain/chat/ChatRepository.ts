import { Chat } from './Chat';

/**
 * @desc
 *   Repository는 interface 이므로 실제 구현은 infra 에서 진행합니다.
 *   interface만 잘 구현 된다면, domain이 어떤 플랫폼에 있던지 제대로 동작해야 합니다.
 *
 *   항상 domain 개체(또는 void)를 반환합니다.
 */

export interface ChatRepository {
  sendChat(message: string, userId: number): Promise<Chat>;
  receiveChat(userId: number): Promise<Chat>;
  getChatLog(userId: number): Promise<Chat[]>;
}
