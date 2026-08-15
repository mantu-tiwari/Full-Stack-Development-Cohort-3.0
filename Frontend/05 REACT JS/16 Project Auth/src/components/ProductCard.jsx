import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-slate-50 p-6">
        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-600">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Rating */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span className="text-sm">⭐</span>
            <span className="text-sm font-semibold text-yellow-700">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-slate-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold capitalize text-slate-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-auto pt-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Price
              </p>

              <p className="text-2xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button className="rounded-full bg-slate-100 p-3 text-lg transition hover:bg-indigo-100">
              ❤️
            </button>
          </div>

          <button className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-4 py-3 font-semibold text-white shadow-md transition hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
