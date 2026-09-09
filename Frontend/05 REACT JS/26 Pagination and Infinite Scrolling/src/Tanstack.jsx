import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getProduct } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Tanstack = () => {
  const [page, setPage] = useState(0);
  let limit = 10;

  let { data, isPending, error } = useQuery({
    queryKey: ["product", page],
    queryFn: () => getProduct(limit,page),
    placeholderData: keepPreviousData // ye baar baar reload se prevent karta hai jo data ek baar load ho jata hai wo dubara load nhi hota hai 
  });

  let totalPage = Math.ceil(data?.total / limit);
  console.log(page);
  console.log(totalPage);

  console.log("the product data is", data);
  if (isPending) return <h1>Product Loading...</h1>;
  if (error) return <h1>error is fetching data</h1>;
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {data?.products.map((e) => {
          return <ProductCard key={e.id} product={e} />;
        })}
      </div>
      <div className="flex gap-4 justify-center items-center p-8">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage(page - 1);
          }}
          className=" cursor-pointer bg-gray-900 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-600"
        >
          Previous
        </button>
        <p>
          {page + 1} of {totalPage}
        </p>
        <button
          disabled={page >= totalPage - 1}
          onClick={() => {
            setPage(page + 1);
          }}
          className=" cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-white bg-gray-900 transition hover:bg-purple-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tanstack;
