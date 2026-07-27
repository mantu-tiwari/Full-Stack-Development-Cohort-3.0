import React, { useContext, useState } from "react";
import { MyDukan } from "./RevContext";

const T1 = () => {
  console.log("t1 rendering.....");
  // const {count, setCount} = useContext(MyDukan)
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Test component 1</h1>

      <>
        <h1>Count : {count} </h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="border px-2 rounded"
        >
          Inc
        </button>
      </>
    </div>
  );
};

export default T1;
