import React from 'react'

const Form = () => {
  return (
    <div className='bg-red-700 p-4 flex flex-col gap-2 items-center rounded-lg'>
      <h1 className='text-white font-bold text-2xl'>Create User</h1>
      <form className='w-fit flex flex-col gap-4 bg-white p-4 rounded-lg'>
        <input className='px-4 py-2 rounded-lg border ' type="text" placeholder='name' />
        <input className='px-4 py-2 rounded-lg border ' type="text" placeholder='email' />
        <input className='px-4 py-2 rounded-lg border ' type="text" placeholder='mobile' />
        <input className='px-4 py-2 rounded-lg border ' type="text" placeholder='image' />
        <button className='text-white font-bold px-4 py-2 rounded-lg border bg-blue-600 cursor-pointer'>Apply</button>
      </form>
    </div>
  )
}

export default Form
