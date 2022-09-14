import { Moment } from 'moment';

export type ChatDirection = 'USER' | 'BOT';

export interface ChatProperties {
  id: number;
  userId: number;
  userName: string;
  date: Moment;
  direction: ChatDirection;
  message: string;
}
