import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='flex flex-col gap-4 p-4 border-gray-400 border rounded-lg'>
      <div className='w-50 h-60 rounded-lg overflow-hidden'>
        <img className='h-full w-full' src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
      <div>
        <h1>name: {user.name} </h1>
        <p>email: {user.email} </p>
      </div>
      <button>Delete</button>
    </div>
  )
}

export default UserCard
