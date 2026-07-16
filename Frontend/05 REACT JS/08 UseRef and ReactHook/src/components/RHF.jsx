import React from 'react'
import { useForm } from 'react-hook-form';


const RHF = () => {
    console.log('RHF rendering');

    const {register, reset, handleSubmit, formState:{errors}} = useForm()

  return (
    <div>
        <h1>REACT HOOK Form</h1>
      <div className="">
      <form 
      onSubmit={handleSubmit((data) => {
          console.log(data);
      })}
        className="flex flex-col bg-white w-fit gap-4 p-6 rounded-lg "
      >
        <input
        {...register('product Name')}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Product Name"
        />
        <input
        {...register('prices')}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Price"
        />
        <input
        {...register('category')}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="category"
        />
    
        <input
        {...register('imgage')}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="image"
        />
        <button className="p-2 border rounded-lg bg-blue-600 font-bold text-white">
          CREATE
        </button>
      </form>
    </div>
    </div>
  )
}

export default RHF
