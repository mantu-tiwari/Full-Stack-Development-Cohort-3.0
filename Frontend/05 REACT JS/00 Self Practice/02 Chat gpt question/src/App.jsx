import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skill from "./Components/Skill";

let App = () => {
  return (
    // <div>
    //   <Navbar tittle="Mantu Kumar" logo="react logo" />
    //   <Hero heading="frontend developer" button="hire me" />
    //   <Skill skill1="html" skill2="css" />
    //   <About college="gcet" branch="aiml" />
    //   <Footer email="abc@gmail.com" github="xyz.github.com" />
    // </div>
    <>
      <Navbar tittle="Mantu Kumar" logo="react logo" />
      <Hero heading="frontend developer" button="hire me" />
      <Skill skill1="html" skill2="css" />
      <About college="gcet" branch="aiml" />
      <Footer email="abc@gmail.com" github="xyz.github.com" />
    </>
  );
};

export default App;
