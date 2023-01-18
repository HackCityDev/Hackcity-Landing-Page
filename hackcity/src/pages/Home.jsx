import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Logo from "../components/Logo";
import Services from "../components/Services";
import Business from "../components/Business";
import Join from "../components/Join";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhoWeAre />
      <Logo />
      <Services />
      <Business />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;
