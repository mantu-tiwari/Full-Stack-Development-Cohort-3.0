import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { getProductApi } from "./api/infiniteProduct";
import ProductCard from "./components/ProductCard";

const InfiniteScrolling = () => {
  let limit = 60;

  let {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["productData"],
    queryFn: ({ pageParam }) => getProductApi(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      console.log("last page", lastPage);
      console.log("all page", allPage);
      // isi me logic likhayaga
      let loadedData = allPage.length * limit;
      if (loadedData < lastPage.total) return loadedData;
      return undefined;
    },
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error in getting data</h1>;

  console.log("data is ", data);

  let allProduct = data?.pages?.flatMap((e) => e.products) ?? [];

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {allProduct.map((e) => {
          return <ProductCard key={e.id} product={e} />;
        })}
      </div>
      <div className="flex justify-center items-center p-8">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className=" cursor-pointer px-4 py-2 text-gray-900 font-medium border rounded-xl "
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrolling;
