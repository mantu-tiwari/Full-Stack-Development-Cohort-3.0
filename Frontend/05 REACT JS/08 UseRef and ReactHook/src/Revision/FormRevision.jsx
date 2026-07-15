import React, { useState } from "react";

const FormRevision = ({setToggle}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  
  const [user, setUser] = useState([])
  console.log(user);
  
  const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser([...user, data])
    console.log(data);
    setData({
        name: "",
        email: "",
    })
  };
//   console.log(data);

  return (
    <div>
        <h1>login</h1>
      <form className="border flex flex-col w-fit" onSubmit={handleSubmit} action="">
        <input
        required
        value={data.name}
          name="name"
          onChange={handleChange}
          type="text "
          placeholder="name"
        />
        <input
        required
        value={data.email}
          name="email"
          onChange={handleChange}
          type="text "
          placeholder="email"
        />
        <button>Login</button>
      </form>
      <p onClick={() => {
          setToggle((prev) => !prev)
      }} className="cursor-pointer text-blue-700" >redirect</p>
    </div>
  );
};

export default FormRevision;
