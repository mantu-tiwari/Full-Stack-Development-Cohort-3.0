import React from 'react'

const SkeletonProductCard = () => {
  return (
    <div className="flex max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md animate-pulse">
  <div>
    {/* Product Image Placeholder */}
    <div className="aspect-square w-full bg-gray-200" />

    {/* Content */}
    <div className="p-5">
      {/* Category Skeleton */}
      <div className="h-4 w-24 rounded bg-gray-200" />

      {/* Title Skeleton */}
      <div className="mt-3 h-5 w-5/6 rounded bg-gray-200" />

      {/* Rating Skeleton */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-gray-200" />
        <div className="h-3 w-28 rounded bg-gray-200" />
      </div>

      {/* Description Skeleton (2 lines) */}
      <div className="mt-3 space-y-1.5">
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-4/5 rounded bg-gray-200" />
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between border-t border-gray-100 p-5 pt-4">
    {/* Price Skeleton */}
    <div className="h-6 w-16 rounded bg-gray-200" />
    {/* Button Skeleton */}
    <div className="h-8 w-24 rounded-lg bg-gray-200" />
  </div>
</div>
  )
}

export default SkeletonProductCard
