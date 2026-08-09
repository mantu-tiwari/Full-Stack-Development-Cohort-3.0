import React, { useState } from 'react'
import Home from './revision/Home'
import About from './revision/About'
import Contact from './revision/Contact'
import Nav from './revision/Nav'
import { Route, Routes } from 'react-router'

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <Nav setToggle={setToggle}  />
      {/* React router approach */}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      {/* Traditional approach */}
      {/* {toggle === 'home' && <Home/>}
      {toggle === 'about' && <About/>}
      {toggle === 'contact' && <Contact/>} */}
    </div>
  )
}

export default App
