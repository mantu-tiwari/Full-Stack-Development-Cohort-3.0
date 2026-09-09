import React from 'react'

const ProductCardSkelton = () => {
  return (
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100">
        {/* Discount Badge */}
        <div className="absolute left-4 top-4 h-6 w-14 animate-pulse rounded-full bg-gray-200" />

        {/* Stock Badge */}
        <div className="absolute right-4 top-4 h-6 w-20 animate-pulse rounded-full bg-gray-200" />

        {/* Product Image */}
        <div className="h-48 w-48 animate-pulse rounded-xl bg-gray-200" />

        {/* Wishlist */}
        <div className="absolute bottom-4 right-4 h-10 w-10 animate-pulse rounded-full bg-gray-200" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="mb-2 h-3 w-16 animate-pulse rounded bg-gray-200" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Description */}
        <div className="mt-3 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-7 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Shipping */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Button */}
        <div className="mt-5 h-12 w-full animate-pulse rounded-xl bg-gray-200" />
      </div>
    </div>
  )
}

export default ProductCardSkelton
