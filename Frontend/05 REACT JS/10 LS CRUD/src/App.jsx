import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("admi")) || [];
  });
  const [upadtedData, setUpadtedData] = useState(null)
  // console.log(upadtedData);

  const deleteUser = (id) => {
    const filterUser = user.filter((e, i) => {
      return id !== i;
    });
    // console.log(filterUser);
    localStorage.setItem("admi", JSON.stringify(filterUser));
    setUser(filterUser);
  };
  // console.log(user);

  return (
    <div className="p-4 ">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="p-4 flex flex-wrap gap-4 content-start bg-red-700 rounded-lg min-h-screen">
          {user.map((e, i) => {
            return (
              <UserCard
              setUpadtedData={setUpadtedData}
                idx={i}
                key={i}
                del={deleteUser}
                user={e}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Form upadtedData={upadtedData} user={user} setToggle={setToggle} setUser={setUser} />
        </div>
      )}
    </div>
  );
};

export default App;

// // REVISION of Previous Class
// import React, { useState } from "react";
// import Register from "./revision/Register";
// import Login from "./revision/Login";
// import Card from "./revision/Card";
// import RHF from "./revision/RHF";
// const App = () => {
//   const [toggle, setToggle] = useState(true);
//   const [arr, setArr] = useState([]);
//   console.log(arr);
//   return (
//     <div>
//       <h1>This is App component</h1>
//       {toggle ? (
//         <>
//           <Register setToggle={setToggle} setArr={setArr} />
//           <RHF setArr={setArr}/>
//           <h2>Welcome to card</h2>
//           <div className="flex flex-wrap gap-4 ">
//             {arr.map((e) => {
//               return <Card user={e} />;
//             })}
//           </div>
//         </>
//       ) : (
//         <Login setToggle={setToggle} />
//       )}
//     </div>
//   );
// };
// export default App;
