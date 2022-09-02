export enum ChatEvent {
  send = 'SEND_MESSAGE',
  receive = 'RECEIVE_MESSAGE',
  join = 'JOIN',
  leave = 'LEAVE',
  reset = 'RESET',
}

export type ChatDirection = 'send' | 'receive';

export interface ChatProperties {
  id: number;
  userId: number;
  userName: string;
  date: string;
  direction: ChatDirection;
  message: string;
}
