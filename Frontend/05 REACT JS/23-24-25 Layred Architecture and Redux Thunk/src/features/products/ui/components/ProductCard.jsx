import React from "react";

const ProductCard = ({ product }) => {
  // Calculate the discounted price
  const discountedPrice = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border bg-white p-4 shadow-sm">
      {/* Thumbnail Image */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-3 space-y-1">
        {/* Title */}
        <h3 className="truncate font-semibold text-gray-900">
          {product.title}
        </h3>

        {/* <h5 className="text-gray-500 text-xs">{product.category}</h5> */}

        {/* Rating */}
        <p className="text-xs text-gray-500">
          ⭐ <span className="font-medium text-gray-700">{product.rating}</span>
        </p>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-bold text-gray-900">
            ${discountedPrice}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-gray-400 line-through">
              ${product.price}
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <button className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
