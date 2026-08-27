import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='bg-secondary min-h-screen'>
      <nav>
        <Navbar/>
      </nav>
      <main className='p-8'>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
