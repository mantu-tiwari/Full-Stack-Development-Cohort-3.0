import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/home/shop'}>Shop</NavLink>
      <NavLink to={'/home/about'}>About</NavLink>
    </div>
  )
}

export default Navbar
