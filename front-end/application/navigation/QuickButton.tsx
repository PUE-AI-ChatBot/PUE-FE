import React, {useContext, useState} from 'react'
import {Backdrop, Box, Fab} from "@mui/material"
import {Add, HomeOutlined, MessageOutlined, TodayOutlined} from '@mui/icons-material'
import Link from "next/link"
import {NavigationContext, SCREEN_NAME} from "./NavigationProvider"

const wrapStyle = {
    display: 'flex',
    flexWrap: "wrap",
    width: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    justifySelf: "center",
    position: "fixed",
    bottom: 20
}

type IQuickButton = {};
const QuickButton = ({}: IQuickButton) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    const [, setScreenName] = useContext(NavigationContext)

    return (
        <Box sx={wrapStyle}>
            <Backdrop open={isOpen} onClick={toggleOpen}/>
            {
                isOpen &&
                <Box sx={{display: 'flex', justifyContent: "space-between", bottom: 80, position: "fixed", gap: 2}}>
                    <Link href={"/"}>
                        <Fab size={"medium"} color={"secondary"} onClick={() => setScreenName(SCREEN_NAME.home)}>
                            <HomeOutlined/>
                        </Fab>
                    </Link>
                    <Link href={"/chat"}>
                        <Fab size={"medium"} color={"secondary"} sx={{top: -20}} onClick={() => setScreenName(SCREEN_NAME.chat)}>
                            <MessageOutlined/>
                        </Fab>
                    </Link>
                    <Link href={"/calender"}>
                        <Fab size={"medium"} color={"secondary"} onClick={() => setScreenName(SCREEN_NAME.calendar)}>
                            <TodayOutlined/>
                        </Fab>
                    </Link>
                </Box>
            }
            <Fab onClick={toggleOpen} size={"large"} color={"primary"}>
                <Add/>
            </Fab>
        </Box>
    )
}

export default QuickButton