import React from "react"
import Hero from "./components/Hero/Hero";
import Services from "./components/service/Service";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <main className="overflow-x-hidden bg-white text-dark">
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>
   </main>
  );
}

export default App;
