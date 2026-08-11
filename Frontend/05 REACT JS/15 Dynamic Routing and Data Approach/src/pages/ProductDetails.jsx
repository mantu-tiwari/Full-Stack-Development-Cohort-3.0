import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetails = () => {
  const [singleProductData, setSingleProductData] = useState({});

  // this will help to get the data id or whatever we pass
  const { id } = useParams();

  const getSingleProductData = async () => {
    try {
      let res = await axios(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("details error is ", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <div >
      <div className=" min-h-screen bg-slate-400 p-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-xl flex items-center justify-center p-8">
              <img
                src={singleProductData.image}
                alt={singleProductData.title}
                className="w-full h-112.5 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <span className="w-fit bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                {singleProductData.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-semibold mt-5 text-gray-900">
                {singleProductData.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-5">
                <span className="text-yellow-500 text-xl">★</span>

                <span className="font-semibold">
                  {singleProductData.rating?.rate}
                </span>

                <span className="text-gray-400">
                  ({singleProductData.rating?.count} reviews)
                </span>
              </div>

              {/* Price */}
              <h2 className="text-3xl font-bold text-green-600 mt-6">
                ${singleProductData.price}
              </h2>

              {/* Description */}
              <p className="text-gray-500 mt-6 leading-7">
                {singleProductData.description}
              </p>

              {/* Button */}
              <button
                className="bg-blue-600 hover:bg-blue-700
                         text-white px-6 py-3
                         rounded-lg mt-8 w-fit"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
