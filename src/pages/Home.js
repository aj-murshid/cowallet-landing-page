import React from "react";
import "./Home.css";
import Hero from "../sections/Hero/Hero";
import Introduction from "../sections/Introduction/Introduction";
import Features from "../sections/Features/Features";
import Explore from "../sections/Explore/Explore";
import Testimonials from "../sections/Testimonials/Testimonials";
import Updates from "../sections/Updates/Updates";
import Footer from "../sections/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div style={{width: "99.9%", border: "0.5px solid gray"}}/>
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
