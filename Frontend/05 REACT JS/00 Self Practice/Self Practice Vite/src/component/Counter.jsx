import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      <h3 style={{color: count<0 ? 'red' : 'green'}} >Count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(count = 0)
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
