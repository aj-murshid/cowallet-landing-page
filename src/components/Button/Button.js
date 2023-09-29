import React from "react";
import "./Button.css";

const CtaButton = ({ name, img, background, textColor }) => {
  console.log(background);
  return (
    <div className="cta">
      {img ? (
        <button
          className="upper btn"
          style={{ background: background, color: textColor }}
        >
          {img}
          {name}
        </button>
      ) : (
        <button className="btn" style={{ background: { background } }}>
          {name}
        </button>
      )}
    </div>
  );
};

export default CtaButton;
