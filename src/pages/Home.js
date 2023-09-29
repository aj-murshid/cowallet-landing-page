import React from "react";
import Hero from "../sections/Hero/Hero";
import Introduction from "../sections/Introduction/Introduction";
import Features from "../sections/Features/Features";
import Explore from "../sections/Explore/Explore";
import Testimonials from "../sections/Testimonials/Testimonials";
import Updates from "../sections/Updates/Updates";
import Footer from "../sections/Footer/Footer";

const Home = () => {
  return (
    <div className="home" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Hero />
      <Introduction />
      <Features />
      <Explore />
      <Testimonials />
      <Updates />
      <Footer />
    </div>
  );
};

export default Home;
