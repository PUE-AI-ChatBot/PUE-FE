import io from 'socket.io-client';

export class SocketClient {
  constructor(private socket = io('SOCKET_BACK_URL')) {}

  emitData(event: string, data: any) {
    this.socket.emit(event, data);
  }

  onReceive<T>(event: string, callback: (data: T) => void) {
    this.socket.on(event, callback);
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export default new SocketClient();
