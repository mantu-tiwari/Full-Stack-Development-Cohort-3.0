import React, { useContext } from "react";
import { Star } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const ProductsCard = ({ product, isInCart }) => {
  const { setCartItem, incQuantity } = useContext(MyStore);
  const navigate = useNavigate()

  const addToCart = () => {
    setCartItem((prev) => [...prev, {...product, quantity:1}]);
    // alert('Great Product has been added to the Cart')
  };

  return (
    <div className=" group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Image */}
      <div onClick={() => {
          navigate(`/detail/${product.id}`)
      }} className="h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {product.category}
        </span>
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="ml-1 font-medium text-gray-700">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>
        {/* Price & Button */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          {isInCart ? (
            <div className="flex items-center overflow-hidden rounded-lg border">
              <button className="p-2 hover:bg-gray-100">-</button>
              <span className="w-10 text-center font-semibold">{isInCart.quantity} </span>
              <button onClick={() => {
                  incQuantity(product.id)
              }} className="p-2 hover:bg-gray-100">+</button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
