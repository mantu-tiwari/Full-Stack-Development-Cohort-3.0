import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="border-2 p-3 flex flex-col gap-3 rounded-2xl justify-between ">
      <div className="w-40">
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2 className="font-bold text-2xl">{product.title.substring(0, 10)}</h2>
        <p className="font-semibold">{product.description.substring(0, 20)}</p>
        <p className="font-semibold">{product.price}</p>
      </div>
      <button className="p-2 text-white rounded-3xl font-bold bg-red-500">
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
