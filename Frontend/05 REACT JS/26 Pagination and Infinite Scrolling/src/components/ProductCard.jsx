const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50">
        {/* Discount */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          -{product.discountPercentage}%
        </span>

        {/* Stock */}
        <span
          className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-medium ${
            product.availabilityStatus === "In Stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.availabilityStatus}
        </span>

        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-gray-900 hover:text-white"
        >
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center text-sm">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${discountedPrice}
          </span>

          <span className="pb-0.5 text-sm text-gray-400 line-through">
            ${product.price}
          </span>
        </div>

        {/* Shipping */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <span>🚚</span>
          <span>{product.shippingInformation}</span>
        </div>

        {/* CTA */}
        <button
          type="button"
          disabled={product.stock === 0}
          className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
