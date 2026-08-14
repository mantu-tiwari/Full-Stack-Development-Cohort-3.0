import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthShop } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const {registrationData,setRegistrationData} = useContext(AuthShop)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const arr = [...registrationData, data]
      setRegistrationData(arr)
      toast.success('Registered Successfully')
    localStorage.setItem('registeredUser', JSON.stringify(arr))
      reset()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl bg-white p-8 shadow-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Register</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
            {...register('name',{
                required: 'Name is required'
            })}
              type="text"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-600" >{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            {...register('email', {
                required: 'Email is required'
            })}
              type="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600" >{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            {...register('password', {
                required: 'password is required',
                minLength: {
                    value: 6, 
                    message: 'Minimun 6 digit is required'
                }
            })}
              type="password"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              placeholder="Create a password"
            />
            {errors.password && <p className="text-red-600" >{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition duration-200">
            Register
          </button>
        </form>

        {/* Login Toggle */}
        <div className="text-center text-sm text-gray-600 pt-2">
          Already have an account?{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer font-medium text-blue-600 hover:text-blue-500 focus:outline-none underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
