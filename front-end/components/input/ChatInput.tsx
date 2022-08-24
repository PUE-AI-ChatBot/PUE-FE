import React, {useState} from 'react'
import {Box, IconButton, InputBase, Paper} from "@mui/material"
import {Send} from "@mui/icons-material"

type IInput = { handler: (m: string) => void };

const ChatInput = ({handler}: IInput) => {
    /**
     * @desc
     *  Controlled Component
     */
    const [text, setText] = useState('')
    const onSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            if(text === '') return

            handler(text)
            setText('')
        }

    /**
     * @todo
     *   position, width 스타일 조정 필요
     *   다른 컴포넌트에서 재사용 불가
     */
    return (
        <Paper component={'form'} onSubmit={onSubmit} elevation={3} sx={{
            py: 1,
            px: 4,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            width: 'calc(100% - 32px)',
            bottom: 30,

        }}>
            <Box width={'85%'}>
                <InputBase value={text} onChange={(e) => setText(e.target.value)} fullWidth
                           placeholder={"메세지를 입력해 주세요."}/>
            </Box>
            <IconButton type={"submit"}>
                <Send/>
            </IconButton>
        </Paper>
    )
}

export default ChatInput