import React, { useState } from "react";

const RegisterRevision = ({ setToggle, setArr }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
  });
 
  console.log(data);
  // console.log(arr);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr( (prev) => [...prev, data]);
    setData({
      name: "",
      email: "",
      gender: "",
    });
  };
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-fit border"
        action=""
      >
        <input
          required
          value={data.name}
          onChange={handleChange}
          required
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          required
          value={data.email}
          onChange={handleChange}
          required
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          required
          value={data.gender}
          onChange={handleChange}
          required
          name="gender"
          type="text"
          placeholder="gender"
        />
        <button>Register</button>
      </form>
      <p
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="cursor-pointer text-blue-700"
      >
        redirect
      </p>
    </div>
  );
};

export default RegisterRevision;
