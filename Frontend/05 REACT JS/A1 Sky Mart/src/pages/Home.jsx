import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MyShop } from "../context/MyContext";
import { useNavigate } from "react-router";

const Home = () => {

  const {setCurrentPage, subtotal} = useContext(MyShop)
  let navigate = useNavigate()

  return (
    
    <div>
      <main className="bg-[#090909] min-h-screen text-white">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-10">
          <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="uppercase tracking-[4px] text-lime-400 text-sm font-semibold">
                  Welcome to SkyMart
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                  Shop Smarter,
                  <br />
                  <span className="text-lime-400">Live Better.</span>
                </h1>
                <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-xl">
                  Discover thousands of premium products at amazing prices with
                  lightning-fast delivery.
                </p>
                <div className="flex gap-4 mt-10">
                  <button onClick={() => {
                      navigate('/main/shop')
                  }} className="bg-lime-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
                    Shop Now
                  </button>
                  <button className="border border-zinc-700 px-8 py-3 rounded-full hover:border-lime-400">
                    Browse
                  </button>
                </div>
              </div>
              
              {/* Right Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-lime-950 rounded-2xl p-6">
                  <h2 className="text-4xl font-bold text-lime-400">20K+</h2>
                  <p className="text-zinc-300 mt-2">Products</p>
                </div>
                <div className="bg-[#181818] rounded-2xl p-6">
                  <h2 className="text-4xl font-bold">Free</h2>
                  <p className="text-zinc-400 mt-2">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================= STATS ================= */}
        {/* ===================== STATS ===================== */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cart Items */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6 flex items-center gap-5 hover:border-lime-400 transition">
              <div className="w-16 h-16 rounded-2xl bg-lime-400/10 flex justify-center items-center">
                <i className="fa-solid fa-cube text-2xl text-lime-400"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">0</h2>
                <h3 className="text-xl font-semibold text-white">Cart Items</h3>
                <p className="text-zinc-400">In your bag</p>
              </div>
            </div>
            {/* Cart Value */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6 flex items-center gap-5 hover:border-blue-500 transition">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex justify-center items-center">
                <i className="fa-solid fa-arrow-trend-up text-2xl text-blue-400"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">{subtotal.toFixed(2)} </h2>
                <h3 className="text-xl font-semibold text-white">Cart Value</h3>
                <p className="text-zinc-400">Ready to checkout</p>
              </div>
            </div>
            {/* Top Products */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6 flex items-center gap-5 hover:border-orange-500 transition">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex justify-center items-center">
                <i className="fa-regular fa-star text-2xl text-orange-400"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">5</h2>
                <h3 className="text-xl font-semibold text-white">Top Products</h3>
                <p className="text-zinc-400">Highly rated</p>
              </div>
            </div>
            {/* Categories */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6 flex items-center gap-5 hover:border-purple-500 transition">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex justify-center items-center">
                <i className="fa-solid fa-tags text-2xl text-purple-400"></i>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">24</h2>
                <h3 className="text-xl font-semibold text-white">Categories</h3>
                <p className="text-zinc-400">To explore</p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= CATEGORIES ================= */}
        {/* ===================== CATEGORY ===================== */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="uppercase tracking-[4px] text-lime-400 font-semibold text-sm">
                Browse
              </p>
              <h2 className="text-5xl font-bold text-white mt-2">
                Shop by category
              </h2>
            </div>
            <button className="text-lime-400 font-semibold hover:underline">
              View all →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Beauty */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl h-36 flex flex-col justify-center items-center gap-4 hover:border-lime-400 transition cursor-pointer">
              <span className="text-4xl">💄</span>
              <h3 className="font-semibold text-lg">Beauty</h3>
            </div>
            {/* Fragrance */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl h-36 flex flex-col justify-center items-center gap-4 hover:border-lime-400 transition cursor-pointer">
              <span className="text-4xl">✨</span>
              <h3 className="font-semibold text-lg">Fragrances</h3>
            </div>
            {/* Furniture */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl h-36 flex flex-col justify-center items-center gap-4 hover:border-lime-400 transition cursor-pointer">
              <span className="text-4xl">🏠</span>
              <h3 className="font-semibold text-lg">Furniture</h3>
            </div>
            {/* Grocery */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl h-36 flex flex-col justify-center items-center gap-4 hover:border-lime-400 transition cursor-pointer">
              <span className="text-4xl">🍎</span>
              <h3 className="font-semibold text-lg">Groceries</h3>
            </div>
            {/* Decoration */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl h-36 flex flex-col justify-center items-center gap-4 hover:border-lime-400 transition cursor-pointer">
              <span className="text-4xl">🖼️</span>
              <h3 className="font-semibold text-lg text-center">
                Home Decoration
              </h3>
            </div>
            {/* Kitchen */}
            <div className="bg-[#111111] border border-zinc-800 rounded-3xl h-36 flex flex-col justify-center items-center gap-4 hover:border-lime-400 transition cursor-pointer">
              <span className="text-4xl">🍳</span>
              <h3 className="font-semibold text-lg text-center">
                Kitchen Accessories
              </h3>
            </div>
          </div>
        </section>
        {/* ================= BENEFITS ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8">
              <i className="fa-solid fa-truck-fast text-lime-400 text-3xl"></i>
              <h3 className="text-2xl font-semibold mt-5">Fast Delivery</h3>
              <p className="text-zinc-400 mt-3">
                Same day delivery on selected products.
              </p>
            </div>
            <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8">
              <i className="fa-solid fa-shield-halved text-lime-400 text-3xl"></i>
              <h3 className="text-2xl font-semibold mt-5">Secure Payments</h3>
              <p className="text-zinc-400 mt-3">100% encrypted transactions.</p>
            </div>
            <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-8">
              <i className="fa-solid fa-tags text-lime-400 text-3xl"></i>
              <h3 className="text-2xl font-semibold mt-5">Best Prices</h3>
              <p className="text-zinc-400 mt-3">
                Premium products at affordable prices.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
