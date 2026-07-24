import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='flex justify-between items-center p-4 bg-red-900 text-white rounded-lg'>
      <h1>LOGO</h1>
      <div className='flex gap-4 text-xl'>
        <h1 onClick={() => {
            setToggle(true)
        }} className='cursor-pointer border rounded-lg px-2'>Home</h1>
        <h1 onClick={() => {
            setToggle(false)
        }} className='cursor-pointer border rounded-lg px-2'>Cart</h1>
      </div>
      <button className='border px-4 py-1 rounded-lg cursor-pointer font-bold bg-blue-700'>Login</button>
    </div>
  )
}

export default Navbar
