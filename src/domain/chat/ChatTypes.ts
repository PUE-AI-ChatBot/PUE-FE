export type ChatDirection = 'send' | 'receive';

export interface ChatProperties {
  id: number;
  userId: number;
  userName: string;
  date: string;
  direction: ChatDirection;
  message: string;
}
