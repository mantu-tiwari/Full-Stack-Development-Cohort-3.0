import React from 'react'

const Card = ({arr}) => {
  return (
    <div className='border w-fit p-2 rounded-lg flex flex-wrap flex-col gap-1'>
        <h1>Name: {arr.name} </h1>
        <h1>Email: {arr.email} </h1>
        <h1>City: {arr.city} </h1>
        <p className='text-[10px]'>id: {arr.id}</p>
        <div className='flex gap-4'>
            <button className='border px-2 rounded-lg'>Edit</button>
            <button className='border px-2 rounded-lg'>Delete</button>
        </div>
    </div>
  )
}

export default Card
