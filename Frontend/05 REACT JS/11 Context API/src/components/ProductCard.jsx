import React from 'react'

const ProductCard = ({ product, setCartItem }) => {


    
  return (
    <div className="max-w-sm rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="h-72 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="p-5">
        <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="mt-3 text-lg font-bold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 mt-2 text-sm line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-2xl font-bold text-green-600">
              ${product.price}
            </p>
            <p className="text-yellow-500 text-sm">
              ⭐ {product.rating.rate} ({product.rating.count})
            </p>
          </div>

          <button onClick={() => {
              setCartItem(prev => [...prev, product])
          }} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard
