import React, { useEffect } from "react";

const T3 = () => {
  console.log("t3 rendering.....");

  // // Memory Leak concept
  //   const id = setInterval(() => {
  //     console.log('i am interval T3');
  //   }, 1000);
  //   useEffect(() => {
  //     return () => {
  //       console.log('t3 exit');
  //         clearInterval(id)
  //     }
  //   },[])

  return (
    <div>
      <h1>Test component 3</h1>
    </div>
  );
};

export default T3;
