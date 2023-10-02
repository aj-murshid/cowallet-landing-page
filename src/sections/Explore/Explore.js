import React from "react";
import "./Explore.css";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { moreFeatures } from "../../data/moreFeatures";
import img1 from "/public/images/project.png";

const Explore = () => {
  return (
    <div className="explore">
      <h1 className="heading capital">explore more features</h1>
      <p className="sub-heading capital">discover the power of our feature-rich platform</p>

      <div className="features-card">
        {moreFeatures.map((feature) => (
          <FeatureCard img={feature.img} data={feature.data} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
