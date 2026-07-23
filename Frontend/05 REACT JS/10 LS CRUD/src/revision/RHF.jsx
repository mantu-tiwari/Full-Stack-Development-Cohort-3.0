import React from "react";
import { useForm } from "react-hook-form";

const RHF = ({ setArr }) => {
  console.log("RHF Rendering");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange'
  });
  console.log("here is the error", errors);
  const submitData = (data) => {
    console.log(data);
    setArr((prev) => [...prev, data]);
    reset();
  };

  return (
    <div>
      <h1>RHF form (with validation) </h1>
      <form
        onSubmit={handleSubmit(submitData)}
        className="w-fit border rounded-lg flex flex-col"
      >
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invlid email address'
            }
          })}
          type="text"
          placeholder="email"
        />
        {errors.email && (
          <p className="text-red-500"> {errors.email.message} </p>
        )}
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 10,
              message: "Minimum 10 Digit is Required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 Digit is Required",
            },
          })}
          type="text"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RHF;
