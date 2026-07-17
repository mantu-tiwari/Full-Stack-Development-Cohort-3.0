import { useForm } from 'react-hook-form';
import React from 'react'

const RHF = () => {
    // console.log('rhf rendering.... ');
    const {register, reset, control, handleSubmit, formState: {error}} = useForm()


  return (
    <div>
      <h1>This is React hook form </h1>
      <form onSubmit={handleSubmit((data) => {
          console.log(data);
      })} className='flex flex-col w-fit border' >
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="text" placeholder='email' />
        <input {...register('city')} type="text" placeholder='city' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RHF
