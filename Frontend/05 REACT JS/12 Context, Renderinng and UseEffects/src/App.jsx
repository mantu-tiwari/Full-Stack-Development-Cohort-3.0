import React, { useContext, useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { ContextProvider, MyStore } from './context/MyContext';

const App = () => {

  console.log('app rendering...');
  const data= useContext(MyStore)
  console.log(data);

  return (
    <div>
      <h1>This is App</h1>

{/* context provider ke andar jitne component wrap honge sirf whi render honge */}
      <ContextProvider>
      <Home/>
      <About/>
      </ContextProvider>

      <Contact/>

      
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
