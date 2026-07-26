import React from 'react'

const Nav = ({setToggle}) => {



  return (
    <div className='flex gap-4 bg-gray-400 justify-center p-4 font-bold'>
      <h1 onClick={() => {
          setToggle(true)
      }} className='border p-2 rounded-lg cursor-pointer bg-blue-600 text-white'>Home</h1>
      <h1 onClick={() => {
          setToggle(false)
      }} className='border p-2 rounded-lg cursor-pointer bg-blue-600 text-white'>Cart</h1>
    </div>
  )
}

export default Nav
