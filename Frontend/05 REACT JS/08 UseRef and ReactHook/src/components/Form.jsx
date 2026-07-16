import React, { useRef, useState } from "react";

const Form = () => {
  console.log("form rendering");

  const formRef = useRef({});
  const [product, setProduct] = useState({})
  //   const nameRef = useRef()
  //   const priceRef = useRef()
  //   const catRef = useRef()
  //   const imgRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
        pName: formRef.current.name.value,
        price: formRef.current.price.value,
        category: formRef.current.category.value,
        image: formRef.current.image.value
    }
    setProduct(obj)
    console.log(obj);
    console.log(product);

    // console.log(formRef.current.name.value);
    // console.log(formRef.current.price.value);
    // console.log(formRef.current.categpry.value);
    // console.log(formRef.current.image.value);

    // console.log(nameRef.current.value);
    // console.log(priceRef.current.value);
    // console.log(catRef.current.value);
    // console.log(imgRef.current.value);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-fit gap-4 p-6 rounded-lg "
      >
        <input
        ref={(e) => {
            formRef.current.name = e
        }}
          // ref={nameRef}
          name="Product Name"
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Product Name"
        />
        <input
        ref={(e) => {
            formRef.current.price = e
        }}
          // ref={priceRef}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Price"
        />
        <span>Select Category</span>
        <select ref={(e) => {
            formRef.current.category = e
        }}  className="p-2 border rounded-lg">
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
        ref={(e) => {
            formRef.current.image = e
        }}
        //   ref={imgRef}
          className="p-2 border rounded-lg"
          type="text"
          placeholder="image"
        />
        <button className="p-2 border rounded-lg bg-blue-600 font-bold text-white">
          CREATE
        </button>
      </form>

      <h1>{product.pName}</h1>
      <h1>{product.price}</h1>
      <h1>{product.category}</h1>
      <h1>{product.image}</h1>
    </div>
  );
};

export default Form;
