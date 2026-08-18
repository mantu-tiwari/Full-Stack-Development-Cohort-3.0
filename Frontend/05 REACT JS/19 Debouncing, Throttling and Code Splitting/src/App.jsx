import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  let throttle = false;
  // console.log(productData);
  // console.log(searchData);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("the error is : ", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  let filteredData = () => {
    console.log("filter data is running...");
    let result = productData.filter((e) => {
      return e.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductData(result);
  };

  // deboouncing logic code
  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => {
      filteredData();
    }, 700);
    return () => clearTimeout(timeout); // ye tab chalega jab new aayega or purana jayega
  }, [searchData]);

  // Throttling logic code
  let handleScroll = () => {
    if (throttle) return;
    console.log("scrolling.....");
    throttle = true;
    setTimeout(() => {
      throttle = false;
    }, 4000);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll) // this prevent from memry leakage
  }, []);

  return (
    <div className="p-4">
      <input
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        className="border p-2 rounded-lg"
        type="text"
        placeholder="Search"
      />
      <div className="p-4">
        {productData.map((e) => {
          return (
            <h1 key={e.id}>
              {e.id}. {e.title}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default App;
