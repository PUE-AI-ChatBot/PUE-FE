/**
 * @todo
 *   socket connection
 */

export class SocketClient {
  async mock<T>(...args: any[]): Promise<T> {
    const response = await fetch('MOCK');
    const ret = await response.json();
    return ret;
  }
}

export default new SocketClient();
