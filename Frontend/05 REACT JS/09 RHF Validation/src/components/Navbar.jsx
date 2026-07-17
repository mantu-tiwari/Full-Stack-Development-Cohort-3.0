import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='flex justify-between bg-amber-300 rounded-lg p-4'>
      <div className="logo ">
        <img className='w-[50px]' src="https://img.icons8.com/?size=100&id=108296&format=png&color=000000" alt="user logo" />
      </div>
      <div className="links flex items-center gap-4 font-bold cursor-pointer">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => {
          setToggle((prev) => !prev)
      }} className='border rounded-4xl cursor-pointer bg-blue-600 text-white font-bold px-8'>Create User</button>
    </div>
  )
}

export default Navbar
