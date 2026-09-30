import React, { useContext } from "react";
import { MyShop } from "./context/MyContext";

const App = () => {
  const { currentPage } = useContext(MyShop);

  return (
    <div>
      <h1>This is app</h1>
    </div>
  );
};

export default App;
