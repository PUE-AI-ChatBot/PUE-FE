import React from 'react'
import QuickButton from "./QuickButton"
import Gnb from "./GNB"
import NavigationProvider from "./NavigationProvider"

/**
 * @todo
 *   navigationProvider 제외, component/navigation 으로 이동
 *
 *   provider : navigation local context 이므로 application에 위치
 *   UI : presentation이므로 component/navigation에 위치
 */
type INavigation = React.PropsWithChildren<{}>
const Navigation = ({children}: INavigation) => {
    return (
        <NavigationProvider>
            <Gnb/>
            {children}
            <QuickButton/>
        </NavigationProvider>
    )
}

export default Navigation