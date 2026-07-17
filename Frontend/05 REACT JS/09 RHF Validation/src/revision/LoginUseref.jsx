import React, { useRef, useState } from 'react'

const LoginUseref = ({setToggle}) => {
    // console.log('login rendering...');
    const data = useRef({})
    const [item, setItem] = useState({})
    console.log(item);

    
const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
        name: data.current.name.value,
        email: data.current.email.value,
    }
    setItem(obj)
}
  

  return (
    <div>
      <h1>This is Login Form (UseRef - avoid rerendering) </h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-fit border'>
        <input ref={(e) => {
            data.current.name = e
        }} name='Fname' type="text" placeholder='name' />
        <input ref={(e) => {
            data.current.email = e
        }} name='Femail'  type="text" placeholder='email' />
        <button >login</button>
      </form>
        <p onClick={() => {
            // setToggle(true)
            setToggle((prev) => !prev)
        }} className='text-blue-700 cursor-pointer '>Regsiter Now</p>
    </div>
  )
}

export default LoginUseref
