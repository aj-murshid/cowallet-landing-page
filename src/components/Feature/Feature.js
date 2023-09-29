import React from "react";
import "./Feature.css";

const Feature = ({ svg, image, heading, content }) => {
  return (
    <div className="feature px-200">
      <div className="image__wrapper">
        {svg}
        <div className="image">
          <img src={image} alt="feature-image" />
        </div>
      </div>
      <div className="content">
        <h1 className="capital">{heading}</h1>
        <p className="capital">{content}</p>
      </div>
    </div>
  );
};

export default Feature;
