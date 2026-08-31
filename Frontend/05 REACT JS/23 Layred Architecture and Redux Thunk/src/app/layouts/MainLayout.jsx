import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav>

      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
