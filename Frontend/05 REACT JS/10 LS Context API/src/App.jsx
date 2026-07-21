// REVISION of Previous Class
import React, { useState } from "react";
import Register from "./revision/Register";
import Login from "./revision/Login";
import Card from "./revision/Card";
const App = () => {
  const [toggle, setToggle] = useState(false);
  const [arr, setArr] = useState([]);
  console.log(arr);
  return (
    <div>
      <h1>This is App component</h1>
      {toggle ? (
        <>
          <Register setToggle={setToggle} setArr={setArr} />
          <h2>Welcome to card</h2>
          <div className="flex gap-4">
            {arr.map((e) => {
              return <Card user={e} />;
            })}
          </div>
        </>
      ) : (
        <Login setToggle={setToggle} />
      )}
    </div>
  );
};
export default App;
