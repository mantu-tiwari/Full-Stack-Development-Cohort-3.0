import React from "react";
import { useAuth } from "../../hooks/useAuthHooks";

const LoginPage = () => {
   let {navigate,register, handleSubmit, loginSubmit, errors} = useAuth()
  return (
    <div className="grid min-h-screen place-items-center bg-gray-50 p-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-900">Login</h2>

        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            UserName
            <input
            {...register('username',{
                required: 'email is required'
            })}
              type="text"
              placeholder="Enter your username"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Password
            <input
            {...register('password', {
                required: 'password is requied ',
                minLength: {
                    value: 6,
                    message: 'Minimum 6 digit is required'
                }
            })}
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>} 
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span onClick={() => {
              navigate('/register')
          }} className="font-medium text-blue-600  hover:text-blue-500 cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
