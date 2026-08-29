import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <h1>LOGO</h1>
      <div>
        <NavLink to={'/main'}>Home</NavLink>
        <NavLink to={'/main/shop'}>Shop</NavLink>
        <NavLink to={'/main/about'}>About</NavLink>
      </div>
      <button>LogOut</button>
    </div>
  )
}

export default Navbar
