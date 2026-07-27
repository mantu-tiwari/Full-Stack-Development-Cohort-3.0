import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

//   Quantity increase logic
  const incQuantity = (id) => {
      setCartItem((prev) =>{
        return prev.map((val) => {
            return val.id === id ? {...val, quantity: val.quantity+1} : val;
        })
      })
  }

  return <MyStore.Provider value={{isCartOpen, setIsCartOpen, cartItem, setCartItem, incQuantity}} > {children} </MyStore.Provider>;
};
