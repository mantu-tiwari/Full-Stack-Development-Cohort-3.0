import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-4 justify-center p-4 '>
      <NavLink to={'/'}>Intro</NavLink>
      <NavLink to={'/category'}>Category</NavLink>
      <NavLink to={'/services'}>Services</NavLink>
    </div>
  )
}

export default Navbar
