import React from 'react'

const UserCard = () => {
  return (
    <div className='bg-white w-fit p-4 rounded-lg flex flex-col gap-4 h-fit'>
      <div className=' self-center'>
        <img  src="https://img.icons8.com/?size=100&id=20751&format=png&color=000000" alt="display img" />
      </div>
      <div>
        <h1>Name: </h1>
        <p>Email: </p>
        <p>Contact: </p>
      </div>
      <div className='flex gap-2 '>
        <button className=' cursor-pointer bg-amber-400 font-bold rounded-xl px-4 py-2 '>Update</button>
        <button className=' cursor-pointer bg-red-400 font-bold rounded-xl px-4 py-2 '>Delete</button>
      </div>
    </div>
  )
}

export default UserCard
