import type {AppProps} from "next/app"
import "../styles/globals.css"
import Navigation from "../application/navigation"
import {CssBaseline} from "@mui/material"

function App({Component, pageProps}: AppProps) {
    return (
        <Navigation>
            <CssBaseline/>
            <Component {...pageProps} />
        </Navigation>
    )
}

export default App
