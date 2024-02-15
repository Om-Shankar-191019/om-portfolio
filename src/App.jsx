import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Tech from "./components/Tech";
// import Works from "./components/Works";
// import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="bg-black w-full ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        {/* <Hero /> */}
      </div>
      {/* <About />
      <Experience />
      <Tech />
      <Works />
      <Contact /> */}
    </div>
  );
};

export default App;
