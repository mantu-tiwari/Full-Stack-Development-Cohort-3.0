// Here the useRef concept is used which reduce our rendering process
import React, { useRef, useState } from 'react'
const Login = ({setToggle}) => {
    console.log('login rendering');
    const [arr, setArr] = useState([])
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    console.log(arr);
    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            name: nameRef.current.value,
            email: emailRef.current.value
        }
        setArr([...arr,obj])
    }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-fit border p-2 rounded-lg'>
        <input ref={nameRef} type="text" placeholder='name' />
        <input ref={emailRef} type="text" placeholder='email' />
        <button>Login</button>
      </form>
      <p onClick={() => {
          setToggle((prev) => !prev)
      }} className='text-blue-700 cursor-pointer'>Go to Registration Form </p>
    </div>
  )
}
export default Login
