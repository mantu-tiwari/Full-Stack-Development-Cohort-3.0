import React from 'react'
import About from './components/About'
import Card from './components/Card'
import Contact from './components/Contact'

const Web = () => {
  return (
    <div className= 'text-2xl h-screen grid grid-cols-3 grid-rows-2 gap-4 p-4' >
      <h1 className='bg-blue-300 rounded-xl col-span-3 flex justify-center items-center'>Website</h1>
        <About/>
        <Card/>
        <Contact/>
    </div>
  )
}

export default Web
