import React, { useRef, useState } from "react";

const Form = () => {
  const [data, setData] = useState({});


  console.log('form rendering');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-fit gap-4 p-6 rounded-lg "
      >
        <input
          onChange={(e) => {
              setData({ ...data, productName: e.target.value });
            }}

            name="Product Name"
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => {
            setData({ ...data, price: e.target.value });
          }}
        
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Price"
        />
        <span>Select Category</span>
        <select
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
          className="p-2 border rounded-lg"
        >
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          onChange={(e) => {
            setData({ ...data, price: e.target.value });
          }}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="image"
        />
        <button className="p-2 border rounded-lg bg-blue-600 font-bold text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
