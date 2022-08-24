import type {NextPage} from "next"
import ChatContainer from "../../components/chat"
import {Box} from "@mui/material"
import {useLayoutEffect} from "react"

export interface IChat {
    isUser: boolean;
    message: string;
    date: Date;
    option?: string;
    emotion?: "Positive" | "Negative" | "Sad" | "";
    hasError: boolean;
}

/**
 * @desc 채팅 서비스
 *   말풍선, 선택지, 입력 UI, layout - application
 *   채팅 메세지 전달 - domain
 *   socket 통신 담당 - infra
 */

const Chat: NextPage = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = 'mintcream'
        return () => {
            document.body.style.backgroundColor = 'white'
        }
    }, [])

    return (
        <Box sx={{height: '93vh', px: 2}}>
            <ChatContainer/>
        </Box>
    )
}

export default Chat
