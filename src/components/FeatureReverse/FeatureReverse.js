import React from "react";
import "./FeatureReverse.css";

const Feature = ({ svg, image, heading, content }) => {
  return (
    <div className="feature px-200">
      <div className="content">
        <h1 className="capital">{heading}</h1>
        <p className="capital">{content}</p>
      </div>
      <div className="image__wrapper--reverse">
        {svg}
        <div className="image">
          <img src={image} alt="feature-image" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
