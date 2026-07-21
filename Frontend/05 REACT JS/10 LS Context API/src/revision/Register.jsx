import React, { useState } from 'react'

const Register = ({setToggle, setArr,setHide}) => {
    console.log('register rendering');
    const [data, setData] = useState({
        name: '',
        email: '',
        city: '',
    })
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setArr(prev => [...prev, data])
        setData({
            name: '',
            email: '',
            city: '',
        })
    }
  return (
    <div>
      <h1>Registratin Form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-fit border' >
        <input onChange={handleChange} value={data.name} name='name' type="text" placeholder='name' />
        <input onChange={handleChange} value={data.email} name='email' type="text" placeholder='email' />
        <input onChange={handleChange} value={data.city} name='city' type="text" placeholder='city' />
        <button>Register</button>
      </form>
      <p onClick={() => {
          setToggle((prev) => !prev)
      }} className='text-blue-700 cursor-pointer'>Go to login Form </p>
    </div>
  )
}
export default Register
