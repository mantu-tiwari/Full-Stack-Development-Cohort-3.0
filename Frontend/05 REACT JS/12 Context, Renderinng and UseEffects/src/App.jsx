import React, { useContext, useEffect, useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { ContextProvider, MyStore } from './context/MyContext';
import axios from 'axios'

const App = () => {

  const [toggle, setToggle] = useState(true)
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null)
  console.log(apiData);
  console.log('app rendering...');

  // api calling using axios - async await use karne se direct data milta hai no more jhanjat
  const productApi = async () => {
      let res = await axios.get('https://fakestoreapi.com/products')
      // console.log(res.data);
      setApiData(res.data)
  }

  useEffect(() => {
    productApi()
  }, [])
  
  
  
  // useEffect(() => {
      
  // },[])

  // const data= useContext(MyStore)
  // console.log(data);

  return (
    <div>
      <h1>This is App</h1>

{/* context provider ke andar jitne component wrap honge sirf whi render honge */}
      {/* <ContextProvider>
      <Home/>
      <About/>
      </ContextProvider> */}
      <h1>Count : {count} </h1>
      <button onClick={() => {
          setCount(count+1)
      }} className='border px-2 rounded-lg' >Increase</button>
      <button onClick={() => {
          setToggle((prev) => !prev)
      }} className='border px-2 rounded-lg' >change toggle</button>

        {/* isme jo hai sirf whi chalega unomountin phase wla nhi chalega */}
      {
        toggle ? <Contact/> : <About/>
      }

      
    </div>
  )
}

export default App




// import React, { useState } from 'react'
// import Nav from './revision/Nav'
// import Home from './revision/Home'
// import AddCart from './revision/AddCart'
// const App = () => {
//   const [toggle, setToggle] = useState(true)
//   return (
//     <div>
//       <h1>hello</h1>
//       <Nav setToggle={setToggle} />
//       {
//       toggle ? <Home setToggle={setToggle} /> : <AddCart/>
//       }
//     </div>
//   )
// }
// export default App
