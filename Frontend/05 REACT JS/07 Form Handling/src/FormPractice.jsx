// // Practising form all method
// import React, { useState } from "react";
// const FormPractice = () => {
//   // const [name, setName] = useState("")
//   // const [email, setEmail] = useState("")
//   // console.log(name);
//   // console.log(email);
//   const [data, setData] = useState({
//     // name: '', // email: ''
//   });
//   console.log(data);
//   const valueChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   }
//   return (
//     <div className="flex flex-col w-80 gap-2">
//       <h1 className="text-2xl">Form Handling Practice</h1>
//       <input
//       name='name'
//         onChange={valueChange}
//         className="border-1"
//         type="text"
//         placeholder="name"
//       />
//       <input
//       name="email"
//         onChange={valueChange}
//         className="border-1"
//         type="text"
//         placeholder="email"
//       />
//       <button>Submit</button>
//       <h1>This is the Display box</h1>
//       <div className="border-3">
//         <h1>Name : {data.name} </h1>
//         <h1>Email :{data.email} </h1>
//       </div>
//     </div>
//   );
// };
// export default FormPractice;

// // ********************* Chat gpt questions practice
// import React, { useState } from 'react'
// const FormPractice = () => {
//     const [user, setUser] = useState("")
//     console.log(user);
//   return (
//     <div>
//       <input onChange={(e) => {
//           setUser(e.target.value)
//       }} type="text" placeholder='username' />
//       <h1>hello {user}</h1>
//     </div>
//   )
// }
// export default FormPractice

// import React, { useState } from 'react'
// const FormPractice = () => {
//     const [user, setUser] = useState({})
//     console.log(user);
//     const handleChange = (e) => {
//         let {name, value} = e.target
//          setUser({...user, [name]: value})
//     }
//   return (
//     <div>
//       <input name='first' onChange={handleChange} type="text" placeholder='First name' />
//       <input name='last' onChange={handleChange} type="text" placeholder='last name' />
//       <input name='email' onChange={handleChange} type="email" placeholder='Email' />
//       <input name='age' onChange={handleChange} type="number" placeholder='age' />
//       <button onClick={() => {
//           alert('Submit Successfully')
//       }} className='border-1 p-1 rounded-lg block' >Submit</button>
//       <h1>Full name :{user.first} {user.last} </h1>
//       <h1>Email :{user.email} </h1>
//       <h1>Age :{user.age} </h1>
//     </div>
//   )
// }
// export default FormPractice

// // password show/hide logic
// import React, { useState } from 'react'
// const FormPractice = () => {
//     const [password, setPassword] = useState('')
//     console.log(password);
//   return (
//     <div>
//       <input onChange={(e) => {
//           setPassword(e.target.value)
//           console.log(e);
//       }} type="password" placeholder='password' />
//       <button onClick={() => {
//         //   setPassword( {type= {password ? 'text' : 'password'}})
//       }} className='border-1 p-1 rounded-lg block'>Show/Hide</button>
//     </div>
//   )
// }
// export default FormPractice

// Reset option
import React, { useState } from "react";
const FormPractice = () => {
  const [del, setDel] = useState({});
  console.log(del);
  const displayValue = (e) => {
    setDel({ ...del, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input name="name" onChange={displayValue} type="text" placeholder="name" />
      <input name="email" onChange={displayValue} type="text" placeholder="email" />
      <button onClick={(e) => {
          setDel({
            name: '',
            email: '',
          })
      }} className="border p-1 rounded-lg block">Reset</button>
      <h1>name: {del.name} </h1>
      <h1>email: {del.email} </h1>
    </div>
  );
};
export default FormPractice;
