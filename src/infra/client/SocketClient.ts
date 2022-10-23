import io, { Socket } from 'socket.io-client';
import URL from 'utils/url';

export class SocketClient {
  constructor(private socket: Socket | null = null, public connected = false) {}

  emitData(event: string, data: any) {
    this.socket?.emit(event, data);
  }

  onReceive<T>(event: string, callback: (data: T) => void) {
    /**
     * @desc
     *   socket disconnect 상태에도
     *   callback handler 는 저장됩니다.
     */
    this.socket?.on(event, callback);
  }

  connect() {
    /**
     * @todo
     *   인증 토큰 추가
     */
    if (this.socket === null) {
      this.socket = io(`${URL.BASE}/realchat`, {
        transports: ['websocket', 'polling'],
        upgrade: false,
        forceNew: true,
      });
      this.connected = true;
      this.socket.on('disconnect', res =>
        console.warn('Socket 연결이 끊겼습니다 :::', res),
      );
    }
  }

  disconnect() {
    if (this.socket?.connected) {
      this.socket.disconnect();
      this.connected = false;
      this.socket = null;
    }
  }
}

export default new SocketClient();
