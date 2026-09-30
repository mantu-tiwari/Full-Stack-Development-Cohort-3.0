import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";
import { MyShop } from "../context/MyContext";

const Cart = () => {
  const { cartProduct } = useContext(MyShop);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <section className="max-w-7xl mx-auto px-5 py-12">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">Your Cart</h1>
          <p className="text-zinc-400 mt-2">
            {cartProduct.length} item{cartProduct.length !== 1 && "s"} in your
            cart
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-5">
            {cartProduct.length > 0 ? (
              cartProduct.map((ele) => <CartCard key={ele.id} item={ele} />)
            ) : (
              <div className="bg-[#111111] rounded-2xl border border-zinc-800 py-24 text-center">
                <i className="fa-solid fa-cart-shopping text-6xl text-zinc-700"></i>

                <h2 className="text-2xl font-semibold mt-6">
                  Your Cart is Empty
                </h2>
                <p className="text-zinc-500 mt-3">
                  Start shopping to add products.
                </p>
              </div>
            )}
          </div>

          {/* Right */}

          <div className="lg:sticky lg:top-24 h-fit">
            <OrderSummary cart={cartProduct} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
