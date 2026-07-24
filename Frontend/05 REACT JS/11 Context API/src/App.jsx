import React, { useState } from "react";
import Nav from "./revision/Nav";
import Form from "./revision/Form";
import Card from "./revision/Card";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const [arr, setArr] = useState(() => {
      return JSON.parse(localStorage.getItem('user')) || []
  });
  const [upadtedData, setUpadtedData] = useState(null)
  console.log(arr);
  const deleteUser = (id) => {
      let filterUser = arr.filter((e) => {
          return id !== e.id;
      })
      localStorage.setItem('user', JSON.stringify(filterUser))
      setArr(filterUser)
  }
  return (
    <div>
      <Nav setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-2 flex-wrap">
          {arr.map((e,i) => {
              return <Card key={i} arr={e} setToggle={setToggle} deleteUser={deleteUser} setToggle={setToggle} setUpadtedData={setUpadtedData} />
          })}
        </div>
      ) : (
        <Form arr={arr} setArr={setArr} setToggle={setToggle} upadtedData={upadtedData} />
      )}
    </div>
  );
};
export default App;
