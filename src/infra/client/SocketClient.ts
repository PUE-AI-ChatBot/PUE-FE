import io, { Socket } from 'socket.io-client';

export class SocketClient {
  constructor(private socket: Socket | null = null, public connected = false) {}

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
      transports: ['websocket', 'polling'],
      upgrade: false,
      forceNew: true,
    });
    this.connected = true;
    this.socket.on('disconnect', res =>
      console.warn('Socket 연결이 끊겼습니다 :::', res),
    );
  }

  disconnect() {
    this.socket?.disconnect();
    this.connected = false;
    this.socket = null;
  }
}

export default new SocketClient();
