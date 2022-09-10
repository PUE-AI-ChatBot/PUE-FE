import { SocketClient } from '@infra/client/SocketClient';
import { Socket } from 'socket.io-client';

const spyEmit = jest.spyOn(Socket.prototype, 'emit').mockImplementation();
const spyOn = jest.spyOn(Socket.prototype, 'on').mockImplementation();
const spyConnect = jest.spyOn(Socket.prototype, 'connect').mockImplementation();
const spyDisconnect = jest
  .spyOn(Socket.prototype, 'disconnect')
  .mockImplementation();

describe('class SocketClient', () => {
  let socketClient: SocketClient;

  beforeEach(() => {
    socketClient = new SocketClient();
    jest.clearAllMocks();
  });
  afterEach(() => {
    socketClient.disconnect();
  });

  it('constructor', () => {
    expect(socketClient.connected).toBeFalsy();
    expect(spyConnect).not.toBeCalled();
  });

  it('emitData()', () => {
    socketClient.connect();
    socketClient.emitData('event', 'data');

    expect(spyEmit).toBeCalledWith('event', 'data');
    expect(spyEmit).toBeCalledTimes(1);
  });

  it('onReceive()', () => {
    socketClient.connect();

    const mockCallback = jest.fn();
    socketClient.onReceive('event', mockCallback);

    expect(spyOn).toBeCalledWith('event', mockCallback);
  });

  it('connect()', () => {
    expect(spyConnect).not.toBeCalled();

    socketClient.connect();
    expect(spyConnect).toBeCalledTimes(1);
    expect(socketClient.connected).toBeTruthy();
  });

  it('disconnect()', () => {
    socketClient.disconnect();
    expect(socketClient.connected).toBeFalsy();
    expect(spyDisconnect).not.toBeCalled();

    socketClient.connect();
    socketClient.disconnect();

    expect(socketClient.connected).toBeFalsy();
    expect(spyDisconnect).toBeCalledTimes(1);
    expect(spyConnect).toBeCalledTimes(1);
  });

  /**
   * @todo
   *   mocking server emit --> client's handler exec
   */
});
