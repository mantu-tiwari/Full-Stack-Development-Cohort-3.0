// // Brute formce approach to take input from form
// import React, { useState } from "react";
// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   console.log(name);
//   return (
//     <div className="flex flex-col w-60 gap-2">
//       <h1>This is Form </h1>
//       <input
//         onChange={(e) => {
//           setName(e.target.value); // isse react ko pata chalta hai ki value kya hai
//         }}
//         className="border-2 rounded-md"
//         type="text"
//         placeholder="name"
//       />
//       <input
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//         className="border-2 rounded-md"
//         type="text"
//         placeholder="email"
//       />
//       <input
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//         className="border-2 rounded-md"
//         type="text"
//         placeholder="password"
//       />
//       {/* <input className='border-2 rounded-md' type="text" placeholder='email' />
//       <input className='border-2 rounded-md' type="text" placeholder='password' />
//       <button className='border-2 rounded-md bg-blue-200'>Submit</button> */}
//       <h1>This is name : {name}</h1>
//       <h1>This is email : {email}</h1>
//       <h1>This is password : {password}</h1>
//     </div>
//   );
// };
// export default Form;

// // Good Approach
// import React, { useState } from 'react'
// const Form = () => {
//     const [data, setData] = useState({
//         // name: '',
//         // email: '',
//         // password: ''
//     })
//     console.log('form data',data);
//   return (
//     <div>
//         <input onChange={(e) => {
//             setData({...data, name:e.target.value})
//         }} type="text" placeholder='name' />
//         <input onChange={(e) => {
//             setData({...data, email: e.target.value})
//         }} type="text" placeholder='email' />
//         <input onChange={(e) => {
//             setData({...data, password:e.target.value})
//         }} type="text" placeholder='password' />
//         <button>Submit</button>
//       <h1>This is name: {} </h1>
//       <h1>This is email: {} </h1>
//       <h1>This is password: {} </h1>
//     </div>
//   )
// }
// export default Form

// Optamised Approach
import React, { useState } from "react";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(data);
  const handleChange = (e) => {
    let {name, value} = e.target // doubt in this line
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <input
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="name"
      />
      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        type="text"
        placeholder="password"
      />
      <button>Submit</button>
      <h1>name: {data.name} </h1>
      <h1>email: {data.email} </h1>
      <h1>password: {data.password} </h1>
    </div>
  );
};
export default Form;
