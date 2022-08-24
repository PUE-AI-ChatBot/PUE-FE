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

    return (
        <Paper component={'form'} onSubmit={onSubmit} elevation={3} sx={{
            py: 1,
            px: 4,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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