// Practising form all method
import React, { useState } from "react";
const FormPractice = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // console.log(name);
  // console.log(email);
  const [data, setData] = useState({
    // name: '', // email: ''
  });
  console.log(data);

  const valueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <div className="flex flex-col w-80 gap-2">
      <h1 className="text-2xl">Form Handling Practice</h1>
      <input
      name='name'
        onChange={valueChange}
        className="border-1"
        type="text"
        placeholder="name"
      />
      <input
      name="email"
        onChange={valueChange}
        className="border-1"
        type="text"
        placeholder="email"
      />
      <button>Submit</button>

      <h1>This is the Display box</h1>
      <div className="border-3">
        <h1>Name : {data.name} </h1>
        <h1>Email :{data.email} </h1>
      </div>
    </div>
  );
};

export default FormPractice;
