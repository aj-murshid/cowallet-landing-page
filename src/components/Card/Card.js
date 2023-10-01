import React from "react";
import "./Card.css";

const Card = ({ img, text }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="image-container">
          <img className="card-image" src={img} alt="feature-image" />
        </div>
        <p style={{ textAlign: "center" }}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
