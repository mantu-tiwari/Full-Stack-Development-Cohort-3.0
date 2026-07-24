import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({children}) => {

    // here you can write js
    const [centralData, setCentralData] = useState('mai context se hu')


    return <MyStore.Provider value={centralData} >{children}</MyStore.Provider>
}