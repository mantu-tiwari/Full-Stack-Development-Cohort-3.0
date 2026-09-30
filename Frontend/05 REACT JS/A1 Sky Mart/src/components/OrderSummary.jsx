import React, { useContext } from "react";
import { MyShop } from "../context/MyContext";

const OrderSummary = ({ cart }) => {
  // Temporary Calculation
  const {subtotal} = useContext(MyShop)

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6 sticky top-24">
      {/* Heading */}

      <h2 className="text-2xl font-bold text-white mb-8">Order Summary</h2>

      {/* Subtotal */}

      <div className="flex justify-between items-center text-zinc-400 mb-4">
        <span>Subtotal</span>

        <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
      </div>

      {/* Delivery */}

      <div className="flex justify-between items-center text-zinc-400 mb-6">
        <span>Delivery</span>

        <span className="text-lime-400 font-medium">Free</span>
      </div>

      <hr className="border-zinc-800 mb-6" />

      {/* Total */}

      <div className="flex justify-between items-center mb-8">
        <span className="text-xl font-semibold text-white">Total</span>

        <span className="text-3xl font-bold text-lime-400">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout */}

      <button className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold py-3 rounded-xl transition-all duration-300">
        <i className="fa-solid fa-credit-card mr-2"></i>
        Checkout
      </button>

      {/* Clear Cart */}

      <button className="w-full mt-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium py-3 rounded-xl transition-all duration-300">
        <i className="fa-solid fa-trash mr-2"></i>
        Clear Cart
      </button>
    </div>
  );
};

export default OrderSummary;
