import React, { useState } from 'react'
import Nav from './revision/Nav'
import Home from './revision/Home'
import AddCart from './revision/AddCart'

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <h1>hello</h1>
      <Nav setToggle={setToggle} />
      {
      toggle ? <Home setToggle={setToggle} /> : <AddCart/>
      }
    </div>
  )
}

export default App
