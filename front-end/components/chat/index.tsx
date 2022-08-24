import React, {useCallback, useEffect, useState} from 'react'
import {chatService, MessageRes} from "../../application/chat/ChatService"
import {MessageLeft, MessageRight} from "./Message"
import ChatInput from "../input/ChatInput"

type IChat = {};
const ChatContainer = ({}: IChat) => {

    const addMessage = (m: MessageRes) => setMessages(prev => prev.concat(m))

    const [messages, setMessages] = useState<MessageRes[]>([])

    const handleSendMessage = useCallback(
        (message: string) => {
            /**
             * @todo
             *   create Message Domain
             */
            const param: MessageRes = {
                text: message,
                user: {name: "sohee", photo: ""}
            }
            addMessage(param)

            /**
             * @todo
             *   send Message Domain to ChatService
             */
            chatService.sendMessage()
        },
        [],
    )

    useEffect(() => {
        chatService.addListener(addMessage)
        setMessages(chatService.getMessageLog())
        return () => chatService.clear()
    }, [])

    /**
     * @desc
     *   index key 는 권장하지 않지만,
     *   element 순서가 바뀌진 않으므로 사용한다.
     */
    return (
        <>
            {messages.map((message, idx) =>
                message.user.name === "PUE"
                    ? <MessageLeft key={idx} {...message} />
                    : <MessageRight key={idx} {...message}/>)}
            <ChatInput handler={handleSendMessage}/>
        </>
    )
}

export default ChatContainer