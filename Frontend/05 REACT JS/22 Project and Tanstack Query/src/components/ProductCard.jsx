import React from "react";

const ProductCard = ({ product }) => {


  const discountedPrice = (product.price - product.price * (product.discountPercentage / 100)).toFixed(
    2,
  );

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* Top Image & Badge Container */}
        <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain p-6 transition-transform duration-300 hover:scale-105"
          />
          {/* Discount Badge */}
          {product.discountPercentage > 0 && (
            <span className="absolute top-3 left-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
              -{product.discountPercentage}%
            </span>
          )}
          {/* Availability Badge */}
          <span
            className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${
              product.stock > 0
                ? "bg-emerald-100 text-emerald-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider font-semibold">
            <span>{product.brand}</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className="mt-2 text-lg font-bold text-gray-900 line-clamp-1"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1">
            <div className="flex text-amber-400">
              {/* Star Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {product.rating}
            </span>
            <span className="text-xs text-gray-400">
              ({product.stock} left in stock)
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs text-gray-600 line-clamp-2">
            {product.description}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600"
              >
                #{product.tags}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section: Shipping/Policy & Price Action */}
      <div className="p-5 pt-0 border-t border-gray-100 mt-4">
        {/* Logistics Information */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
          <span>🚀 {product.shippingInformation}</span>
          <span>🔄 {product.returnPolicy}</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-gray-900">
                ${discountedPrice}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.price}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
