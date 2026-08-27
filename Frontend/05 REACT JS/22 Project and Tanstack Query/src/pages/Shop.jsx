import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProduct } from "../hooks/useProduct";

const Shop = () => {
  const { isPending, data, error } = useProduct();
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
      {isPending
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : data.map((e) => {
            return <ProductCard key={e.id} product={e} />;
          })}
    </div>
  );
};

export default Shop;
