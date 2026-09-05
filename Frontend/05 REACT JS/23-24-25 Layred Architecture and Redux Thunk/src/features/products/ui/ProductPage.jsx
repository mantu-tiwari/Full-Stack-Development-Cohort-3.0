import React from "react";
import {
  useAllCategory,
  useAllProduct,
  useProductByCategory,
} from "../hooks/productHooks";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";

const ProductPage = () => {
  let { data, isPending, error, search, setSearch } = useAllProduct();
  console.log(data);
  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();
  console.log("this is procduct by category", productByCategory);

  if (isPending) return <h1>Product Loading....</h1>;

  return (
    <div>
      <div className="flex p-4 justify-center items-center">
        <Filter
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {productByCategory?.products.length
          ? productByCategory?.products.map((e) => {
              return <ProductCard key={e.id} product={e} />;
            })
          : data?.map((e) => {
              return <ProductCard key={e.id} product={e} />;
            })}
      </div>
    </div>
  );
};

export default ProductPage;
