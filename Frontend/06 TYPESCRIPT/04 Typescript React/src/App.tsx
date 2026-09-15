import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  console.log(productData);

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {productData.map((e) => {
        return <ProductCard product={e} key={e.id} />;
      })}
    </div>
  );
};

export default App;
