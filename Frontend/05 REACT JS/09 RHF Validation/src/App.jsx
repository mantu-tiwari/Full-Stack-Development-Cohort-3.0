// // Revision 
// import React, { useState } from 'react'
// import Register from './revision/Register'
// import Login from './revision/Login'
// import Card from './revision/Card'
// import LoginUseref from './revision/LoginUseref'
// import RHF from './revision/RHF'
// const App = () => {
//   const [toggle, setToggle] = useState(false)
//   const [arr, setArr] = useState([])
//   console.log(arr);
//   return (
//     <div>
//         <h1>You are in App component</h1>
//         {toggle ? <Register setToggle={setToggle} setArr={setArr} /> : <LoginUseref setToggle={setToggle} />}
//         <h1 >Welcome to Card</h1>
//         <div className='flex gap-4 flex-wrap min-h-40' >
//           {arr.map((e) => (
//               <Card user={e}/>
//           ))}
//         </div>
//         <RHF/>
//     </div>
//   )
// }
// export default App

import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='p-4 '>
      <Navbar/>
    </div>
  )
}

export default App

