import React, { useCallback, useMemo, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState({ name: "piyush", id: 435 });
  // console.log(str);

  // useCallback me wrap karte hi ye memoize ho jayega 
  const test = useCallback(() => {
      console.log('testing function');
  },[])

  // Heavy function (using memo)
  const calculation = useMemo(() => {
    console.log('calculation is running...');
      let sum = 0 
      for (let i=1; i<1000; i++){
        sum+=i
      }
      return sum
  },[])


  console.log("app is rendering");
  return (
    <div>
      <h1>Count : {count}</h1>
      {/* <h2>Name : {str} </h2> */}
      <button
        className="border px-2 rounded-lg"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setStr({ ...str, name: "rakesh" });
        }}
        className="border px-2 rounded-lg"
      >
        Change Name
      </button>
      <h1>The sum is : {calculation} </h1>
      <Home />
      <About str={str} />
      <Contact test={test}/>
    </div>
  );
};

export default App;
