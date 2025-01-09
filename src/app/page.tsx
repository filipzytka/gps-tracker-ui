"use client"
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Feature from "./components/feature/feature";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Cta from "./components/cta/cta";

export default  function Home() {
  return (
    <div> 
      <Header/>
      {/* <DataTableDemo></DataTableDemo> */}
      <Hero/>
      <Feature/>
      <Cta/>
      <Faq/>
      <Footer/>
    </div>
  );
}

