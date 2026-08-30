import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='bg-gray-300 min-h-screen'>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
