import { createContext, useState } from "react";

export const MyDukan = createContext();
export const SamanProvider = ({ children }) => {
  console.log("Revision context is rendering......");
  const [count, setCount] = useState(0);

  return (
    <MyDukan.Provider value={{ count, setCount }}>
      {" "}
      {children}{" "}
    </MyDukan.Provider>
  );
};
