import React, { useState } from "react";

const Register = ({setToggle}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [user, setUser] = useState([])
    console.log(formData);
    console.log(user);

    const handleChange = (e) => {
        const {name ,value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // console.log('submitted');
        // console.log(formData.name);
        // console.log(formData.email);
        // console.log(formData.password);
        setUser([...user, formData])  // ye baad me chalega kyuki this is async function
        // console.log(user);
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }

  return (
    <div className=" bg-white p-4 rounded-lg">
      <h2 className="text-center font-bold">Register Form </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2 w-80 " action="">
        <input
        required
        value={formData.name}
        name="name"
        onChange={handleChange}
        className="border-1 py-1 px-3 rounded-lg"
        type="text"
        placeholder="name"
        />
        <input
        required
        value={formData.email}
        name='email'
        onChange={handleChange}
        className="border-1 py-1 px-3 rounded-lg"
        type="text"
        placeholder="email"
        />
        <input
        required
        value={formData.password}
          name='password'
          onChange={handleChange}
          className="border-1 py-1 px-3 rounded-lg"
          type="password"
          placeholder="password"
        />
        <button className="bg-blue-600 p-2 rounded-lg text-white font-bold cursor-pointer">
          Register Here
        </button>
        <p>
          Already have an account?{" "}
          <span onClick={() => {
              setToggle(prev => !prev);
          }} className="text-blue-800 cursor-pointer">Login Here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
