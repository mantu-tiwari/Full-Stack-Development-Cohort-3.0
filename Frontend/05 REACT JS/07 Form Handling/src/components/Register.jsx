import React from "react";

const Register = ({setToggle}) => {
  return (
    <div className=" bg-white p-4 rounded-lg">
      <h2 className="text-center font-bold">Register Form </h2>
      <form className="flex flex-col gap-4 p-2 w-80 " action="">
        <input
          className="border-1 py-1 px-3 rounded-lg"
          type="text"
          placeholder="name"
        />
        <input
          className="border-1 py-1 px-3 rounded-lg"
          type="text"
          placeholder="email"
        />
        <input
          className="border-1 py-1 px-3 rounded-lg"
          type="text"
          placeholder="password"
        />
        <button className="bg-blue-600 p-2 rounded-lg text-white font-bold cursor-pointer">
          Register Here
        </button>
        <p>
          Already have an account?{" "}
          <span onClick={() => {
              setToggle(true);
          }} className="text-blue-800 cursor-pointer">Login Here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
