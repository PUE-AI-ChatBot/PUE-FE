import React, {useEffect, useState} from 'react'
import {chatService, MessageRes} from "../../application/chat/ChatService"
import {MessageLeft, MessageRight} from "./Message"
import {Box} from "@mui/material"

type IChat = {};
const ChatContainer = ({}: IChat) => {

    const addMessage = (m: MessageRes) => setMessages(prev => prev.concat(m))

    const [messages, setMessages] = useState<MessageRes[]>([])

    useEffect(() => {
        chatService.addListener(addMessage)
        setMessages(chatService.getMessageLog())
        return () => chatService.clear()
    }, [])

    return (
        <Box >
            {messages.map((message, idx) =>
                message.user.name === "PUE"
                    ? <MessageLeft key={idx} {...message} />
                    : <MessageRight key={idx} {...message}/>)}
            {/* input Component */}
        </Box>
    )
}

export default ChatContainer