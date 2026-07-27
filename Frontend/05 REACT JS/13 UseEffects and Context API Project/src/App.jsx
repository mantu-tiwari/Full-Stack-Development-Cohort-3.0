import React, { useContext, useEffect, useState } from "react";
import T1 from "./revision/T1";
import T2 from "./revision/T2";
import T3 from "./revision/T3";
import { MyDukan, SamanProvider } from "./revision/RevContext";
import axios from "axios";
const App = () => {
  console.log("App rendering.....");
  // const {count, setCount} = useContext(MyDukan)
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState(null);
  const prodApi = async () => {
    let product = await axios.get("https://fakestoreapi.com/products");
    console.log(product.data);
  };
  useEffect(() => {
    setData(prodApi());
  }, []);
  return (
    <div>
      <h1>App component</h1>
      <T1 />
      <>
        {toggle ? <T2 /> : <T3 />}
        <button
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="border rounded px-2"
        >
          Change
        </button>
      </>
      {/* <>
        <h1>Count : {count} </h1>
        <button onClick={() => {
            setCount(count+ 1)
        }} className='border px-2 rounded' >Inc</button>
      </> */}
    </div>
  );
};
export default App;
