import ProductCard from "../components/ProductCard";
import SkeletonProductCard from "../components/SkeletonProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../api/productApi";
import { useProductApi } from "../hooks/productApiHooks";

const Shop = () => {

  const {isPending, data, error} = useProductApi()
  if(error) return <h1>{error.message}</h1>
  
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
      {isPending
        ? Array.from({ length: 20 }).map((_, index) => (
            <SkeletonProductCard key={index} />
          ))
        : data.map((e) => {
            return <ProductCard key={e.id} product={e} />
        })}
    </div>
  );
};

export default Shop;
