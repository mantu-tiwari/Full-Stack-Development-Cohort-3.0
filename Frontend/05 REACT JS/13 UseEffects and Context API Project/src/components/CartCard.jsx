import React from "react";
import { Minus, Plus, Trash2, Star } from "lucide-react";

const CartCard = ({ cartProduct }) => {
  // console.log(cartProduct);
  return (
    <div className="flex gap-5 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Product Image */}
      <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-gray-100 p-3">
        <img
          src={cartProduct.image}
          alt={cartProduct.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="line-clamp-2 text-lg font-semibold">
            {cartProduct.title}
          </h2>

          <p className="mt-1 text-sm capitalize text-gray-500">
            {cartProduct.category}
          </p>

          <div className="mt-2 flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-gray-700">
              {cartProduct.rating.rate} ({cartProduct.rating.count} reviews)
            </span>
          </div>

          <p className="mt-3 text-2xl font-bold text-indigo-600">
            ${cartProduct.price}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-5 flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center overflow-hidden rounded-lg border">
            <button className="p-2 hover:bg-gray-100">
              <Minus size={18} />
            </button>
            <span className="w-10 text-center font-semibold">{cartProduct.quantity}</span>

            <button className="p-2 hover:bg-gray-100">
              <Plus size={18} />
            </button>
          </div>

          {/* Remove */}
          <button className="flex items-center gap-2 text-red-500 transition hover:text-red-600">
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
