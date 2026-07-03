import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log('counter is rendering...');

  return (
    <div>
      <h2 className="text-3xl font-bold" >Count : {count}</h2>
      <button
      className="border p-1 rounded-xl"
        onClick={() => {
        //   setCount(count + 1);
        //   setCount(count + 1); // yaha kitna bhi call ho jaye sirf ek hi chalega kyuki ye batching concept pe chalta hai
        //   setCount(count + 1);
        setCount((prev) => prev+1)
        setCount((prev) => prev+1)
        setCount((prev) => prev+1)
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
