import React, { useState } from "react";
import FormPractice from "./FormPractice";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);
  return (
    <div className="h-screen bg-gray-200  ">
      <Register setUser={setUser} setToggle={setToggle} />
      <div className="flex gap-2 p-4">
        {user.map((e) => (
          <UserCard user={e} />
        ))}
      </div>

      {/* <FormPractice/> */}
    </div>
  );
};

export default App;
