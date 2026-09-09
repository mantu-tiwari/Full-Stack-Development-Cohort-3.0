import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import ProductCardSkelton from "./components/ProductCardSkelton";

const App = () => {
  const [productData, setProductData] = useState(null);
  console.log("product data -->", productData);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products?limit=10");
      setProductData(res.data);
    } catch (error) {
      console.log("product data api error ", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
        {productData?.products
          ? productData?.products.map((e) => {
              return <ProductCard key={e.id} product={e} />;
            })
          : Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkelton key={index} />
            ))}
      </div>
      <div className="flex gap-4 justify-center items-center p-8">
        <button className="bg-gray-900 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-600">
          Previous
        </button>
        <p>Number</p>
        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-white bg-gray-900 transition hover:bg-purple-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
