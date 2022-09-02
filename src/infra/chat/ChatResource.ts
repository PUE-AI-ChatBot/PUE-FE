import { ChatRepository } from '../../domain/chat/ChatRepository';
import { Chat } from '../../domain/chat/Chat';
import { ChatApi, ChatApiProperty } from './ChatApi';
import { ChatEvent } from '../../domain/chat/ChatTypes';
import httpClient, { HttpClient } from '../client/HttpClient';
import socketClient, { SocketClient } from '../client/SocketClient';

export class ChatResource implements ChatRepository {
  /**
   * @todo
   *   chat 상태 관리 여부?
   */
  private store = {};

  constructor(
    private readonly http: HttpClient,
    private socket: SocketClient,
  ) {}

  async getChatLog(userId: number): Promise<Chat[]> {
    const chatLogApi = await this.http.get<ChatApiProperty[]>(`MOCK/${userId}`);
    const chatLog = chatLogApi.map(api => ChatApi.toDomain(api));
    return chatLog;
  }

  receiveChat(callback: (data: Chat) => void) {
    this.socket.onReceive(ChatEvent.receive, callback);
  }

  sendChat(chat: Chat): void {
    this.socket.emitData(ChatEvent.send, chat.properties);
  }

  connect(): void {
    this.socket.connect();
  }

  disConnect(): void {
    this.socket.disconnect();
  }
}

export default new ChatResource(httpClient, socketClient);
