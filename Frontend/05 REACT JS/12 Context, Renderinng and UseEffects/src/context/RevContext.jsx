import { createContext, useState } from "react";

export const RevStore = createContext()

export const RevStoreProvider = ({children}) => {

    const [data, setData] = useState('this is contex data')

    
    return <RevStore.Provider value={data} >{children} </RevStore.Provider>
}