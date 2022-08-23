import React, {Dispatch, SetStateAction, useState} from 'react'
import {useRouter} from "next/router"

type IScreenState = [string, Dispatch<SetStateAction<string>>]

export const SCREEN_NAME = {
    home: "PUE",
    chat : "상담",
    profile: "내 프로필",
    calendar: "감정 캘린더",
}

/**
 * @todo
 *   Context(Store)은 추후 infra로 이동
 *   상태 관리 논의 필요
 */
export const NavigationContext = React.createContext<IScreenState>([] as unknown as IScreenState)
NavigationContext.displayName = "NavigationContext";

type INavigationProvider = React.PropsWithChildren;
const NavigationProvider = ({children}: INavigationProvider) => {
    const router = useRouter()
    const screenInit = router.pathname.split('/').pop()
    const screenState = useState(screenInit || SCREEN_NAME.home)

    return (
        <NavigationContext.Provider value={screenState}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider