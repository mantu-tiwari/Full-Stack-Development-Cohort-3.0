import ProductCard from "../components/ProductCard";
import SkeletonProductCard from "../components/SkeletonProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../api/productApi";
import { useDummyProduct, useProductApi } from "../hooks/productApiHooks";

const Shop = () => {
  const { isPending, data, error } = useProductApi();
  const {
    data: dummyData,
    isPending: dummyPending,
    fetchNextPage,
    allProduct
  } = useDummyProduct();

  console.log("dummy data", dummyData);
  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      {/* data from fake store */}
      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {isPending
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : data.map((e) => {
              return <ProductCard key={e.id} product={e} />
          })}
      </div> */}

      {/* data from dummy json */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {dummyPending
          ? Array.from({ length: 10 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : allProduct.map((e) => {
              return <ProductCard key={e.id} product={e} />;
            })}
      </div>
      <div className="flex items-center justify-center p-4">
        <button onClick={() => {
            fetchNextPage()
        }} className=" cursor-pointer p-2 border rounded-lg ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Shop;
