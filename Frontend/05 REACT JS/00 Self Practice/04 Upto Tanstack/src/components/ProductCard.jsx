import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:shadow-xl">
      <div>
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold uppercase text-gray-500">
            {product.category}
          </span>

          {/* Title */}
          <h3
            className="mt-2 text-lg font-bold text-gray-900 line-clamp-1"
            title="Mens Casual Premium Slim Fit T-Shirts "
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1.5 text-xs">
            <div className="flex text-amber-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800">
              {product.rating.rate}
            </span>
            <span className="text-gray-400">({product.rating.count})</span>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 p-5 pt-4">
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
