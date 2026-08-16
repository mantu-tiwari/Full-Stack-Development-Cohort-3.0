import React from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit, loginFormSubmit, reset, errors, navigate } =
    useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl bg-white p-8 shadow-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(loginFormSubmit)}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", {
                required: "email is reqired",
              })}
              type="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 digit is required",
                },
              })}
              type="password"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register Toggle */}
        <div className="text-center text-sm text-gray-600 pt-2">
          Don't have an account?{" "}
          <button
            onClick={() => {
              navigate("/register");
            }}
            className=" cursor-pointer font-medium text-blue-600 hover:text-blue-500 focus:outline-none underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
