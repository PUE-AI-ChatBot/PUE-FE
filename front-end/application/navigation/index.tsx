import React from 'react'
import QuickButton from "./QuickButton"
import Gnb from "./GNB"
import NavigationProvider from "./NavigationProvider"

type INavigation = React.PropsWithChildren<{
    quickDisable?: boolean;
}>
const Navigation = ({children, quickDisable}: INavigation) => {
    return (
        <NavigationProvider>
            <Gnb />
            {children}
            {
                !quickDisable && <QuickButton/>
            }
        </NavigationProvider>
    )
}

export default Navigation