import React, { useState } from 'react'
import Home from './revision/Home'
import About from './revision/About'
import Contact from './revision/Contact'
import Nav from './revision/Nav'

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <Nav setToggle={setToggle}  />
      {toggle === 'home' && <Home/>}
      {toggle === 'about' && <About/>}
      {toggle === 'contact' && <Contact/>}
    </div>
  )
}

export default App
