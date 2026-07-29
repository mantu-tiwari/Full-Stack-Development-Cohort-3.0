import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1 className='bg-red-500'>this is Home</h1>
      {/* this nested routing is not recommended */}
      <NavLink to={"/home/details"} > Details ko dikaao</NavLink>
      <Outlet/>
    </div>
  )
}

export default Home
