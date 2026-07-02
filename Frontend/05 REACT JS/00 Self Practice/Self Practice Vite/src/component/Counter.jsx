import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log(count);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Counter;
