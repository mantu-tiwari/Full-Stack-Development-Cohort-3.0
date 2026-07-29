import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {


  const [toggle, setToggle] = useState('home')
  
  return (
    
    
    <div>
      <nav className="flex justify-between items-center p-4">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex justify-between items-center gap-4">
          <h1 onClick={() => {
              setToggle('home')
          }} className="border rounded cursor-pointer px-2">Home</h1>
          <h1 onClick={() => {
              setToggle('contact')
          }} className="border rounded cursor-pointer px-2">Contact</h1>
          <h1 onClick={() => {
              setToggle('about')
          }} className="border rounded cursor-pointer px-2">About</h1>
        </div>
        <button>Login</button>
      </nav>

      {/* These two method are bad practice react router bypass this  */}
      {/* {toggle ? <Home/> : <Contact/>} */}
      <div>
        {toggle === 'home' && <Home/>}
        {toggle === 'about' && <About/>}
        {toggle === 'contact' && <Contact/>}
      </div>
    </div>
  );
};

export default App;
