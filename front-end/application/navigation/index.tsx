import React from 'react'
import QuickButton from "./QuickButton"
import {Box} from "@mui/material"

type INavigation = React.PropsWithChildren
const Navigation = ({children}: INavigation) => {
    return (
        <Box>
            {children}
            <QuickButton/>
        </Box>
    )
}

export default Navigation