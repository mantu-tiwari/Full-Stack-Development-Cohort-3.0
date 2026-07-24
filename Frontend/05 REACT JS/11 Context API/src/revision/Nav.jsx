import React from 'react'

const Nav = ({setToggle}) => {
  return (
    <div className='flex justify-around border p-2 items-center'>
      <h1>LOGO</h1>
      <button onClick={() => {
          setToggle((prev) => !prev)
      }} className='border rounded-lg p-2 cursor-pointer '>Create</button>
    </div>
  )
}

export default Nav
