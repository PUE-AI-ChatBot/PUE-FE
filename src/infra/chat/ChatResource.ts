import { ChatRepository } from '../../domain/chat/ChatRepository';
import { Chat } from '../../domain/chat/Chat';
import { ChatApi } from './ChatApi';
import httpClient, { HttpClient } from '../client/HttpClient';
import socketClient, { SocketClient } from '../client/SocketClient';

export class ChatResource implements ChatRepository {
  /**
   * @todo
   *   chat 상태 관리
   *   http, socket mock 제거
   */
  private store = {};

  constructor(
    private readonly http: HttpClient,
    private socket: SocketClient,
  ) {}

  async getChatLog(userId: number): Promise<Chat[]> {
    const chatLogApi = await this.http.get<ChatApi[]>('MOCK');
    const chatLog = chatLogApi.map(api => api.toDomain());
    return chatLog;
  }

  async receiveChat(userId: number): Promise<Chat> {
    const socketChat = await this.socket.mock<ChatApi>();
    return socketChat.toDomain();
  }

  async sendChat(message: string, userId: number): Promise<Chat> {
    const socketChat = await this.socket.mock<ChatApi>();
    return socketChat.toDomain();
  }
}

export default new ChatResource(httpClient, socketClient);
