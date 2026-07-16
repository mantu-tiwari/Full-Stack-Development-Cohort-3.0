import React, { useRef, useState } from "react";

const Form = () => {
  let inpRef = useRef();
  console.log(inpRef);  // initially it is undefined
  console.log("form rendering");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpRef);
  };

  return (
    <div className="">
      <form
        ref={inpRef}
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-fit gap-4 p-6 rounded-lg "
      >
        <input
          name="Product Name"
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Product Name"
        />
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Price"
        />
        <span>Select Category</span>
        <select
          className="p-2 border rounded-lg"
        >
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="image"
        />
        <button className="p-2 border rounded-lg bg-blue-600 font-bold text-white">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
