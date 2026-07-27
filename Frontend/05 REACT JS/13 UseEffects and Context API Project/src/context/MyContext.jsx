import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  return <MyStore.Provider value={{isCartOpen, setIsCartOpen, cartItem, setCartItem}} > {children} </MyStore.Provider>;
};
