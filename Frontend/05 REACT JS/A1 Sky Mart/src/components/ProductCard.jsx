import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MyShop } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
const { setCartProduct, incQuantity, cartProduct, decQuantity } = useContext(MyShop);

  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative bg-white h-64 flex items-center justify-center p-6">
        {/* Category */}
        <span className="absolute top-3 left-3 bg-[#202020] text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#202020] text-white hover:bg-lime-400 hover:text-black transition">
          <i className="fa-regular fa-heart"></i>
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-white font-semibold line-clamp-2 min-h-13.75">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex text-yellow-400 text-sm">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span className="text-zinc-400 text-sm">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}

        <div className="flex justify-between items-center mt-5">
          <h3 className="text-lime-400 text-2xl font-bold">${product.price}</h3>

          {isInCart ? (
            <div className="flex items-center gap-2">
              <button onClick={() => {
                  decQuantity(product.id)
              }} className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition">
                <i className="fa-solid fa-minus text-xs"></i>
              </button>
              <span className="min-w-7 text-center font-semibold text-white">
                {isInCart.quantity}
              </span>
              <button
                onClick={() => incQuantity(product.id)}
                className="w-9 h-9 rounded-lg bg-lime-400 hover:bg-lime-300 text-black transition"
              >
                <i className="fa-solid fa-plus text-xs"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setCartProduct((prev) => [
                  ...prev,
                  { ...product, quantity: 1 },
                ]);
                toast.success("Added to Cart");
              }}
              className="bg-lime-400 hover:bg-lime-300 text-black px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              <i className="fa-solid fa-cart-plus mr-2"></i>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
