import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-700 text-white font-semibold rounded-lg' >
      <h1>Logo</h1>
      <div className='flex justify-between p-4 gap-4' >
        <NavLink to={'/home'} className='cursor-pointer border px-2 rounded-lg' >Home</NavLink>
        <NavLink to={'/about'} className='cursor-pointer border px-2 rounded-lg' >About</NavLink>
        <NavLink to={'/product'} className='cursor-pointer border px-2 rounded-lg' >Product</NavLink>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
