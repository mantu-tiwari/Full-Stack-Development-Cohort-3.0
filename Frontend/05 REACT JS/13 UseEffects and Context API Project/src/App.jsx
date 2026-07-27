import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {

  const [apiData, setApiData] = useState([]);
  const {isCartOpen, cartItem} = useContext(MyStore)
  // console.log(apiData);
  console.log(cartItem);

  // API Calling using Axios (recommended)
  const getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setApiData(res.data);
    } catch (error) {
      console.log("the error is ", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  // // API calling using Fetch (inbuilt browser function)
  // const prodData = async () => {
  //     try {
  //       const res = await fetch('https://fakestoreapi.com/products')
  //       const data = await res.json()
  //       console.log(data);
  //     } catch (error) {
  //       console.log('the error is ', error);
  //     }
  // }
  // prodData()

  return (
    <div>
      <Navbar />

      {isCartOpen ? (
        <div className="h-screen">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
          {apiData.map((e) => {

            // here is the logic to item added to cart
            const isInCart = cartItem.find((ele) => {
                return e.id === ele.id
            })
            console.log(isInCart);

            return <ProductCard key={e.id} product={e} isInCart={isInCart} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;

// import React, { useContext, useEffect, useState } from "react";
// import T1 from "./revision/T1";
// import T2 from "./revision/T2";
// import T3 from "./revision/T3";
// import { MyDukan, SamanProvider } from "./revision/RevContext";
// import axios from "axios";
// const App = () => {
//   console.log("App rendering.....");
//   // const {count, setCount} = useContext(MyDukan)
//   const [toggle, setToggle] = useState(true);
//   const [data, setData] = useState(null);
//   const prodApi = async () => {
//     let product = await axios.get("https://fakestoreapi.com/products");
//     console.log(product.data);
//   };
//   useEffect(() => {
//     setData(prodApi());
//   }, []);
//   return (
//     <div>
//       <h1>App component</h1>
//       <T1 />
//       <>
//         {toggle ? <T2 /> : <T3 />}
//         <button
//           onClick={() => {
//             setToggle((prev) => !prev);
//           }}
//           className="border rounded px-2"
//         >
//           Change
//         </button>
//       </>
//       {/* <>
//         <h1>Count : {count} </h1>
//         <button onClick={() => {
//             setCount(count+ 1)
//         }} className='border px-2 rounded' >Inc</button>
//       </> */}
//     </div>
//   );
// };
// export default App;
