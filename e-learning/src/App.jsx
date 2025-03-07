import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/service/Service";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero/>
      <Services/>
      <Banner/>
    </main>
  )
}

export default App
