/**
 * User (domain)
 *
 * MessageRes (domain)
 *   - message, writeAt, user:User, (추가 가능)
 *
 * ChatService (application)
 *   - property : ChatRepository
 *   - 가공 로직
 *
 * ChatResource (infra)
 *   - property : SocketClient, HttpClient
 */
interface User {
    name: string;
    photo: string;
}

export interface MessageRes {
    text: string;
    writeAt?: Date;
    user: User;
}

const MOCK_MESSAGE: MessageRes = {
    text: "hello this is mock",
    user: {
        name: "PUE",
        photo: "mock photo url"
    }
}
const MOCK_SEND_MESSAGE: MessageRes = {
    text: "hello?",
    user: {
        name: "YOU",
        photo: "mock photo url"
    }
}

interface ChatRepository {
    sendMessage(m: string): Promise<void>;
}

class ChatService {
    addListener(cb: Function) {
    }

    clear() {
    }

    sendMessage() {
    }

    getMessageLog() {
        const ret = Array(4).fill(null).map(() => MOCK_MESSAGE)
        return ret.concat(MOCK_SEND_MESSAGE, MOCK_SEND_MESSAGE)
    }
}

// singleton instance
export const chatService = new ChatService()