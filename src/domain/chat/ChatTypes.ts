import { Moment } from 'moment';

export type ChatDirection = 'send' | 'receive';

export interface ChatProperties {
  id: number;
  userId: number;
  userName: string;
  date: Moment;
  direction: ChatDirection;
  message: string;
}
