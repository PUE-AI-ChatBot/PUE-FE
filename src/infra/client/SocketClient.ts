import io, { Socket } from 'socket.io-client';

export class SocketClient {
  constructor(private socket: Socket | null = null) {}

  emitData(event: string, data: any) {
    this.socket?.emit(event, data);
  }

  onReceive<T>(event: string, callback: (data: T) => void) {
    this.socket?.on(event, callback);
  }

  connect() {
    /**
     * @todo
     *   인증 토큰 추가
     */
    this.socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}/realchat`, {
      transports: ['websocket'],
      upgrade: false,
      forceNew: true,
    });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}

export default new SocketClient();
