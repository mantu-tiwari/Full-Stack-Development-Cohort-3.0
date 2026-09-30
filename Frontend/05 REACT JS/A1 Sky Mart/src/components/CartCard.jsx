import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const CartCard = ({ item }) => {

    
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-5 hover:border-lime-400 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        {/* Product Image */}

        <div className="w-28 h-28 bg-white rounded-xl flex justify-center items-center p-4 shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="h-20 object-contain"
          />
        </div>

        {/* Product Details */}

        <div className="flex-1">
          <h2 className="text-white text-lg font-semibold line-clamp-2">
            {item.title}
          </h2>

          <p className="text-zinc-400 mt-2">${item.price} each</p>

          {/* Quantity */}

          <div className="flex items-center gap-3 mt-5">
            <button className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
              <i className="fa-solid fa-minus text-sm text-white"></i>
            </button>

            <span className="text-lg font-semibold">{item.quantity}</span>

            <button className="w-10 h-10 rounded-lg bg-lime-400 hover:bg-lime-300 text-black transition">
              <i className="fa-solid fa-plus text-sm"></i>
            </button>
          </div>
        </div>

        {/* Price + Delete */}

        <div className="flex sm:flex-col justify-between items-end sm:h-28">
          <h2 className="text-2xl font-bold text-lime-400">
            ${(item.price * 1).toFixed(2)}
          </h2>

          <button className="text-red-500 hover:text-red-400 transition">
            <i className="fa-solid fa-trash text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
