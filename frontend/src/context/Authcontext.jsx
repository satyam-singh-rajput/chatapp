import React, { Children, useContext, useState } from 'react'
import { createContext } from 'react'
export const Authcontext=createContext();

export const useAuthcontext=()=>{
    return useContext(Authcontext);
};
export const AuthcontextProvider=({children})=>{
    const [Authuser,Setauthuser]=useState(JSON.parse(localStorage.getItem("chat-user"))||null)
    return <Authcontext.Provider value ={{Authuser,Setauthuser}}>
    {children}
    </Authcontext.Provider>
}