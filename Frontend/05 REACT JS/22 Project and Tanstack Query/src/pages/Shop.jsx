import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const Shop = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProductData(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.log("error is ", error);
    }finally{
      setIsLoading(false)
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))  
        : productData.map((e) => {
            return <ProductCard key={e.id} product={e} />;
          })}
    </div>
  );
};

export default Shop;
