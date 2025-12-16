import { createContext, useState } from "react";
import type {ReactNode} from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};
export const LanguageContext=createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({children}:{children:ReactNode}){
    const [language,setLanguage]=useState<string>("en");

    return(
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
            </LanguageContext.Provider>
    )
}