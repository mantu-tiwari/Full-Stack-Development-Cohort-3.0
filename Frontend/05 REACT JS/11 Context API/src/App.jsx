import React, { useState } from "react";
import Nav from "./revision/Nav";
import Form from "./revision/Form";
import Card from "./revision/Card";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [arr, setArr] = useState(() => {
      return JSON.parse(localStorage.getItem('user')) || []
  });
  console.log(arr);

  return (
    <div>
      <Nav setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-2 flex-wrap">
          {arr.map((e,i) => {
              return <Card key={i} arr={e} setToggle={setToggle} />
          })}
        </div>
      ) : (
        <Form arr={arr} setArr={setArr} setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
