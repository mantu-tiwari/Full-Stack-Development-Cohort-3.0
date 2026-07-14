import React, { useState } from "react";
import FormPractice from "./FormPractice";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}

      {/* <FormPractice/> */}
    </div>
  );
};

export default App;
