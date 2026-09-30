import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyShop } from "../context/MyContext";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuthHooks";

const Login = () => {
  const { setCurrentPage } = useContext(MyShop);
  let {navigate, handleSubmit, register, loginSubmit, errors} = useAuth()


  

  return (
    <div>
      <div className="min-h-screen bg-black flex">
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 bg-linear-to-br from-lime-950 via-black to-black p-16 flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
                <i className="fa-solid fa-bolt text-black text-xl"></i>
              </div>
              <h1 className="text-4xl font-bold text-white">
                Sky<span className="text-lime-400">Mart</span>
              </h1>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[6px] text-lime-400 font-semibold mb-6">
              Welcome Back
            </p>

            <h1 className="text-6xl font-bold text-white leading-tight">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h1>

            <p className="text-zinc-400 mt-8 text-lg max-w-lg">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>

            <div className="flex gap-6 mt-16">
              <div className="border border-zinc-800 rounded-2xl p-6 w-40">
                <h2 className="text-4xl font-bold text-lime-400">20K+</h2>
                <p className="text-zinc-400 mt-2">Products</p>
              </div>
              <div className="border border-zinc-800 rounded-2xl p-6 w-40">
                <h2 className="text-4xl font-bold text-lime-400">50K+</h2>
                <p className="text-zinc-400 mt-2">Users</p>
              </div>
              <div className="border border-zinc-800 rounded-2xl p-6 w-40">
                <h2 className="text-4xl font-bold text-lime-400">
                  4.9<i className="fa-solid fa-star text-xl ml-1"></i>
                </h2>
                <p className="text-zinc-400 mt-2">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
          <div className="w-full max-w-md bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl p-8">
            <h1 className="text-4xl font-bold text-white">Sign In</h1>
            <p className="text-zinc-400 mt-2 mb-8">
              Enter your credentials to continue.
            </p>
            <form onSubmit={handleSubmit(loginSubmit)} className="space-y-6">
              <div>
                <div className="flex items-center bg-zinc-800 rounded-xl border border-zinc-700 focus-within:border-lime-400 px-4">
                  <i className="fa-regular fa-envelope text-zinc-500"></i>
                  <input
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid Credential",
                      },
                    })}
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent px-4 py-4 outline-none text-white placeholder:text-zinc-500"
                  />
                </div>
                <p className="text-red-500 text-[12px]">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <div className="flex items-center bg-zinc-800 rounded-xl border border-zinc-700 focus-within:border-lime-400 px-4">
                  <i className="fa-solid fa-lock text-zinc-500"></i>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent px-4 py-4 outline-none text-white placeholder:text-zinc-500"
                  />
                  <i className="fa-regular fa-eye text-zinc-500 cursor-pointer"></i>
                </div>
                <p className="text-red-500 text-[12px]">
                  {errors.password?.message}
                </p>
                <div className="text-right mt-2">
                  <button
                    type="button"
                    className="text-sm text-zinc-400 hover:text-lime-400 cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
              <button className="w-full bg-lime-400 hover:bg-lime-300 transition-all duration-300 text-black font-semibold py-4 rounded-xl cursor-pointer">
                Sign In
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </form>
            <p className="text-center text-zinc-400 mt-8">
              Don't have an account?
              <span
                onClick={() => {
                    navigate('/register')
                }}
                className="text-lime-400 ml-2 cursor-pointer font-semibold"
              >
                Create one
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
