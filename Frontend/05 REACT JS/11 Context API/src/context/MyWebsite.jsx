import { createContext, useContext, useState } from "react";

export const MyShop = createContext()

export const MyShopContextProvider = ({children}) => {

    const [toggle, setToggle] = useState(true);
    const [cartItem, setCartItem] = useState([]);

    return <MyShop.Provider value={{toggle, setToggle, cartItem, setCartItem}} >{children}</MyShop.Provider>
}