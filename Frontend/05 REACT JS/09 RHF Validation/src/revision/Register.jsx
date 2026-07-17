import React, { useState } from 'react'

const Register = ({setToggle, setArr}) => {
    // console.log('Register Rendering');
const [data, setData] = useState({})

console.log(data);

const handleSubmit = (e) => {
    e.preventDefault()
    setArr((prev) => [...prev, data])
    setData({
        name: '',
        email: '',
        city: '',
    })
}

const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
}
  return (
    <div>
      <h1>This is Register Form</h1>

      <form onSubmit={handleSubmit} className='flex flex-col w-fit border'>
        <input onChange={handleChange} value={data.name} name='name' type="text" placeholder='name' />
        <input onChange={handleChange} value={data.email} name='email' type="text" placeholder='email' />
        <input onChange={handleChange} value={data.city} name='city' type="text" placeholder='city' />
        <button>Register</button>
      </form>

        <p onClick={() => {
            // setToggle(false)
            setToggle((prev) => !prev)
        }} className='text-blue-700 cursor-pointer'>Login Now</p>
    </div>
  )
}
// The issue with this register form is that it is using the onChange event listner which can render each time when we give input
export default Register
