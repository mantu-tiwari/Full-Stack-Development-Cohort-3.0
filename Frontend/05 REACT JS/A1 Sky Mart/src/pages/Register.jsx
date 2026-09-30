import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";
import { useAuth } from "../hooks/useAuthHooks";

const Register = () => {
  const { setCurrentPage } = useContext(MyShop);
  let {navigate, register, handleSubmit, errors, registerSubmit,watch} = useAuth()
  const passwordValue = watch("password");

 

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl p-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-xl bg-lime-400 flex items-center justify-center">
            <i className="fa-solid fa-bolt text-black text-xl"></i>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-zinc-400 mb-8">Join SkyMart and start shopping.</p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(registerSubmit)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("name", {
              required: "Name is Required",
            })}
            type="text"
            placeholder="Full Name"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-lime-400"
          />
          <p className="text-red-500 text-[12px]">{errors.name?.message} </p>
          <input
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invlid email address",
              },
            })}
            type="email"
            placeholder="Email Address"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-lime-400"
          />
          <p className="text-red-500 text-[12px]"> {errors.email?.message} </p>
          <input
            {...register("password", {
              required: "password is Required",
              minLength: {
                value: 6,
                message: "Minimum 6 digit is required",
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-lime-400"
          />
          <p className="text-red-500 text-[12px]">
            {errors.password?.message}
          </p>
          <input
            {...register("cnfPassword", {
              required: "Please Confirm your Password",
              validate: (value) =>
                value === passwordValue || "The passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none focus:border-lime-400"
          />
          <p className="text-red-500 text-[12px]">
            {errors.cnfPassword?.message}
          </p>
          <button className="w-full bg-lime-400 text-black font-semibold py-3 rounded-xl hover:bg-lime-300 duration-300 cursor-pointer">
            Create Account
          </button>
        </form>

        {/* Bottom */}
        <p className="text-center text-zinc-400 mt-8">
          Already have an account?
          <span
            onClick={() => {
              navigate('/')
            }}
            className="text-lime-400 font-semibold cursor-pointer ml-2"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
