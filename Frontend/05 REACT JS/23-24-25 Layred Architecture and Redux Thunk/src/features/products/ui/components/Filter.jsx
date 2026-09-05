import React from 'react'
import { useAllCategory } from '../../hooks/productHooks'

const Filter = () => {

    let {data, isPending, error} = useAllCategory()
    // let categories = ['Grocery' , 'Beauty', 'Eletronics']
    console.log(data);

    if (isPending) return <h1>Product Category is loading</h1>


  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Search Bar (Left) */}
      <div className="relative w-full sm:max-w-xs">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border p-2 pl-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {/* Search Icon */}
        <svg
          className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Category Dropdown (Right) */}
      <div className="w-full sm:w-auto">
        <select
          className="w-35 rounded-lg border p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 capitalize"
        >
          <option value="all">All Categories</option>
          {data.map((e) => (
            <option key={e.slug} value={e.slug}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filter
