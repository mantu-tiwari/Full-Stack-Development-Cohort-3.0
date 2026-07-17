import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({setToggle}) => {
    const {register, reset, control, handleSubmit} = useForm()
    const formSubmit = (data) => {
        console.log(data);
        reset()
    }

    return (
    <div className='bg-red-700 min-h-screen p-4 flex flex-col gap-2 items-center rounded-lg'>
      <h1 className='text-white font-bold text-2xl'>Create User</h1>
      <form onSubmit={handleSubmit(formSubmit)} className='w-fit flex flex-col gap-4 bg-white p-4 rounded-lg'>
        <input {...register('name')} className='p-2 rounded-lg border ' type="text" placeholder='name' />
        <input {...register('email')} className='p-2 rounded-lg border ' type="text" placeholder='email' />
        <input {...register('mobile')} className='p-2 rounded-lg border ' type="text" placeholder='mobile' />
        <input {...register('image')} className='p-2 rounded-lg border ' type="text" placeholder='image' />
        <button className='text-white font-bold p-2 rounded-lg border bg-blue-600 cursor-pointer'>Apply</button>
      </form>
    </div>
  )
}

export default Form
