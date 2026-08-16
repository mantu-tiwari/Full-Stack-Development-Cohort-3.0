import React, { useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const [count, setCount] = useState(0)
  console.log('app is rendering');
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => {
          setCount(count+1)
      }}>Increase</button>
      <Home/>
      <About/>
    </div>
  )
}

export default App
