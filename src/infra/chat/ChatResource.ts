import { ChatRepository } from '@domain/chat/ChatRepository';
import { Chat } from '@domain/chat/Chat';
import { ChatApi, ChatApiProperty } from './ChatApi';
import httpClient, { HttpClient } from '@infra/client/HttpClient';
import socketClient, { SocketClient } from '@infra/client/SocketClient';

export enum ChatEvent {
  send = 'SEND_MESSAGE',
  receive = 'RECEIVE_MESSAGE',
}

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

  /**
   * @todo
   *   chat log 적용
   */
  async getChatLog(userId: number): Promise<Chat[]> {
    const chatLogApi = await this.http.get<ChatApiProperty[]>(`MOCK/${userId}`);
    const chatLog = chatLogApi.map(api => ChatApi.toDomain(api));
    return chatLog;
  }

  receiveChat(callback: (data: Chat) => void) {
    this.socket.onReceive<ChatApiProperty>(ChatEvent.receive, res =>
      callback(ChatApi.toDomain(res)),
    );
  }

  sendChat(chat: Chat): void {
    this.socket.emitData(ChatEvent.send, ChatApi.toApi(chat));
  }

  connect(): void {
    this.socket.connect();
  }

  disConnect(): void {
    this.socket.disconnect();
  }
}

export default new ChatResource(httpClient, socketClient);
