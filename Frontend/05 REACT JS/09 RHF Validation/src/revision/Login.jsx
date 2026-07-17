import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div>
      <h1>This is Login Form </h1>
      <form className='flex flex-col w-fit border'>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='email' />
        <button >login</button>
      </form>
        <p onClick={() => {
            // setToggle(true)
            setToggle((prev) => !prev)
        }} className='text-blue-700 cursor-pointer '>Regsiter Now</p>
    </div>
  )
}

export default Login
