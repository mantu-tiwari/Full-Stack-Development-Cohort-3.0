import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col justify-between animate-pulse">
      <div>
        {/* Top Image Placeholder */}
        <div className="relative aspect-square w-full bg-gray-200" />

        {/* Content Section */}
        <div className="p-5">
          {/* Brand & Category Skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-14 bg-gray-200 rounded" />
          </div>

          {/* Title Skeleton */}
          <div className="mt-3 h-5 w-3/4 bg-gray-200 rounded" />

          {/* Rating & Stock Skeleton */}
          <div className="mt-2 flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full" />
            <div className="h-3 w-20 bg-gray-200 rounded" />
          </div>

          {/* Description Skeleton (2 lines) */}
          <div className="mt-3 space-y-1.5">
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-4/5 bg-gray-200 rounded" />
          </div>

          {/* Tags Skeleton */}
          <div className="mt-4 flex gap-1.5">
            <div className="h-4 w-12 bg-gray-200 rounded" />
            <div className="h-4 w-14 bg-gray-200 rounded" />
          </div>
        </div>
      </div>

      {/* Footer Section Skeleton */}
      <div className="p-5 pt-0 border-t border-gray-100 mt-4">
        {/* Logistics Information Skeleton */}
        <div className="mt-3 flex justify-between">
          <div className="h-3 w-24 bg-gray-200 rounded" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>

        {/* Price & Button Skeleton */}
        <div className="mt-4 flex items-center justify-between">
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
