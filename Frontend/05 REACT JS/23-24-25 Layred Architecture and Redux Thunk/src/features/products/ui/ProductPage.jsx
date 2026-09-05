import React from "react";
import { useAllProduct } from "../hooks/productHooks";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";

const ProductPage = () => {
  let { data, isPending, error } = useAllProduct();
  console.log(data);

  if (isPending) return <h1>Product Loading....</h1>;

  return (
    <div>
      <div className="flex p-4 justify-center items-center">
        <Filter />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {data.map((e) => {
          return <ProductCard key={e.id} product={e} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
