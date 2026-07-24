import React from "react";

const Cart = ({ cartItem }) => {
  const totalPrice = cartItem.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {/* Empty Cart */}
        {cartItem.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center justify-center">
            <div className="text-7xl">🛒</div>

            <h2 className="text-3xl font-bold mt-5">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything yet.
            </p>

            <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Products */}
            <div className="lg:col-span-2 space-y-5">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-5"
                >
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-36 h-36 object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      ⭐ {item.rating.rate}
                      <span className="text-gray-500">
                        ({item.rating.count})
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                      <p className="text-2xl font-bold text-green-600">
                        ${item.price}
                      </p>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-5">
                <h2 className="text-2xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between mb-3">
                  <span>Products</span>
                  <span>{cartItem.length}</span>
                </div>

                <div className="flex justify-between mb-3">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;