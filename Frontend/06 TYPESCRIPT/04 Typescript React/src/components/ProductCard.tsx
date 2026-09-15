import type { Product } from '../types'


const ProductCard = ({product}: {product : Product}) => {
  return (
    <div className="flex max-w-sm flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div>
        {/* Product Image */}
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-50 p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="mt-3 space-y-1">
          {/* Category */}
          <span className="text-xs font-semibold uppercase text-gray-400">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="truncate text-sm font-semibold text-gray-800" title={product.title}>
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="text-amber-400">★</span>
            <span className="font-medium text-gray-700">{product.rating?.rate}</span>
            <span>({product.rating?.count})</span>
          </div>
        </div>
      </div>

      {/* Footer / Price & Action */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-2">
        <span className="text-base font-bold text-gray-900">
          ${product.price?.toFixed(2)}
        </span>
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard