import React, {useState} from 'react'
import {Backdrop, Box, Fab} from "@mui/material"
import {Add, HomeOutlined, MessageOutlined, TodayOutlined} from '@mui/icons-material'
import Link from "next/link"

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

    return (
        <Box sx={wrapStyle}>
            <Backdrop open={isOpen} onClick={toggleOpen}/>
            {
                isOpen &&
                <Box sx={{display: 'flex', justifyContent: "space-between", bottom: 80, position: "fixed", gap: 2}}>
                    <Link href={"/"}>
                        <Fab size={"medium"} color={"secondary"}>
                            <HomeOutlined/>
                        </Fab>
                    </Link>
                    <Link href={"/chat"}>
                        <Fab size={"medium"} color={"secondary"} sx={{top: -20}}>
                            <MessageOutlined/>
                        </Fab>
                    </Link>
                    <Link href={"/calender"}>
                        <Fab size={"medium"} color={"secondary"}>
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