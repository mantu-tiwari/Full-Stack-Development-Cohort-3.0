import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyShop = createContext();

export const ContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(() => {
    const isLoggedIn = localStorage.getItem("isLoggedin");

    console.log("isLoggedIn =", isLoggedIn);
    return isLoggedIn === "true" ? "home" : "login";
  });
  const [product, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  const subtotal = cartProduct.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

  console.log(product);
  console.log(cartProduct);

  const getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log("Error is ", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  //  manipulate quantity logic
  const incQuantity = (id) => {
    setCartProduct((prev) => {
      return prev.map((elem) => {
        return elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem;
      });
    });
  };
  const decQuantity = (id) => {
    setCartProduct((prev) => {
      return prev.map((elem) => {
        return elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem;
      });
    });
  };

  return (
    <MyShop.Provider
      value={{
        currentPage,
        setCurrentPage,
        product,
        cartProduct,
        incQuantity,
        decQuantity,
        setCartProduct,
        subtotal,
      }}
    >
      {children}
    </MyShop.Provider>
  );
};
