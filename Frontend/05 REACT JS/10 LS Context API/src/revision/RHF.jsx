import React from "react";
import { useForm } from "react-hook-form";

const RHF = ({setArr}) => {
  
  console.log("RHF Rendering");
  const {handleSubmit, register, reset, formState:{errors}} = useForm();
  console.log('here is the error', errors);
const submitData = (data) => {
    console.log(data);
    setArr(prev => [...prev, data])
    reset()
}

  return (
    <div>
      <h1>RHF form (with validation) </h1>
      <form onSubmit={handleSubmit(submitData)} className="w-fit border rounded-lg flex flex-col">
        <input {...register('email',{
            required: 'email is required',
        })} type="text" placeholder="email" />
        <p className="text-red-500">Email do </p>
        <input {...register('password', {
            required: 'password is required'
        })} type="text" placeholder="password" />
        <p className="text-red-500">password do</p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RHF;
