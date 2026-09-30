import React from "react";

const ShopHeader = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h1 className="text-4xl font-bold text-white">All Products</h1>

          <p className="text-zinc-400 mt-2">30 products found</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mt-8 bg-[#111111] border border-zinc-800 rounded-2xl p-4">
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Search */}

          <div className="lg:col-span-7">
            <div className="flex items-center bg-[#1a1a1a] rounded-xl border border-zinc-700 px-4">
              <i className="fa-solid fa-magnifying-glass text-zinc-500"></i>

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent py-3 px-3 outline-none text-white placeholder:text-zinc-500"
              />
            </div>
          </div>

          {/* Category */}

          <div className="lg:col-span-3">
            <select className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-xl py-3 px-4 text-white outline-none cursor-pointer">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Jewelery</option>
              <option>Men's Clothing</option>
              <option>Women's Clothing</option>
            </select>
          </div>

          {/* Sort */}

          <div className="lg:col-span-2">
            <select className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-xl py-3 px-4 text-white outline-none cursor-pointer">
              <option>Featured</option>
              <option>Price : Low to High</option>
              <option>Price : High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
