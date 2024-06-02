import React, { useReducer } from 'react'

import Cookies from "js-cookie";

export const context = React.createContext<any>(null);

export default function UserContext({children}: {children: any}) {
    const language: any = Cookies.get("language") ? Cookies.get("language") : "en";

    const redFunction = (state: string, action: any) => {
        switch(action){
            case "ar":
                Cookies.set("language", "ar");
                return state = "ar";
                case "en":
                Cookies.set("language", "en");
                return state = "en";
            default:
                return state;
        }
    }
    const [state, disPatch] = useReducer(redFunction, language)
    

    return (
        <context.Provider value={{state, disPatch}}>
            {children}
        </context.Provider>
    )
}
