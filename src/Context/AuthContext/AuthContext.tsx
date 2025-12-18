import { createContext,useEffect, useState, type PropsWithChildren } from "react";
import {jwtDecode} from 'jwt-decode'
type AuthContextData={
    saveLoginData:()=>void;
    loginData:object;
}|null;
export let AuthContext=createContext<AuthContextData>(null);
export default function AuthContextProvider(props:PropsWithChildren){
    const [loginData,setLoginData]=useState({});
    const saveLoginData=()=>{
        let encodedToken=localStorage.getItem("token");
        if(encodedToken){
        let decodedToken=jwtDecode(encodedToken);
        setLoginData(decodedToken);
        }
    }
    useEffect(()=>{
        if (localStorage.getItem("token"))
        saveLoginData()
    },[])
    return <AuthContext.Provider value={{saveLoginData,loginData}}>
        {props.children}
    </AuthContext.Provider>
}