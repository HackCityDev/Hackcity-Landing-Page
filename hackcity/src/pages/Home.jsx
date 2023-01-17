import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Logo from "../components/Logo";
import Services from "../components/Services";
import Why from "../components/Why";
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
      <Why />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;
