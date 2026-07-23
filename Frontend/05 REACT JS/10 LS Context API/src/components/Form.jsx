import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setToggle, setUser, user }) => {


  const { register, reset, control, handleSubmit, formState:{errors} } = useForm({
    mode: 'onChange'
  });
  // console.log('error', errors);
  const formSubmit = (data) => {
    console.log(data);
    const arr = [...user, data]
    setUser(arr)
    localStorage.setItem('admi', JSON.stringify(arr))
    setToggle((prev) => !prev)
    reset();
  };

  

  return (
    <div className="bg-red-700 min-h-screen p-4 flex flex-col gap-2 items-center rounded-lg">
      <h1 className="text-white font-bold text-2xl">Create User</h1>
      
      <form
        onSubmit={handleSubmit(formSubmit)}
        
        className="w-fit flex flex-col gap-4 bg-white p-4 rounded-lg"
      >
        <input
          {...register("name", {
            required: 'name is required',
          })}
          className="p-2 rounded-lg border "
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message} </p>}
        <input
          {...register("email",{
            required: 'email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Enter Valid Email',
            }
          })}
          className="p-2 rounded-lg border "
          type="email"
          placeholder="email"
        />
          {errors.email && <p className="text-red-500"> {errors.email.message}</p>}
        <input
          {...register("mobile",{
            required: 'mobile is required',
            minLength: {
              value: 10, 
              message: 'Minimum 10 Digit is Required'
            },
            maxLength: {
              value: 10, 
              message: 'Maximum 10 Digit is Required'
            },
          })}
          className="p-2 rounded-lg border "
          type="number"
          placeholder="mobile"
        />
          {errors.mobile && <p className="text-red-500"> {errors.mobile.message}</p>}
        <input
          {...register("image", {
            required: 'image is required',
          })}
          className="p-2 rounded-lg border "
          type="url"
          placeholder="image"
        />
          {errors.image && <p className="text-red-500"> {errors.image.message}</p>}
        <button className="text-white font-bold p-2 rounded-lg border bg-blue-600 cursor-pointer">
          Apply
        </button>
      </form>
    </div>
  );
};

export default Form;
