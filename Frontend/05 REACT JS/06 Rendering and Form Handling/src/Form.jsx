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



