import React from "react";
import "./FeatureCard.css";
import img1 from "/public/images/addexpense.png";

const FeatureCard = ({ img, data }) => {
    return (
        <>
            <div className="feature-card">
                <div className="card-data">
                    <img
                        src={img}
                        alt="feature-image"
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "40px" }}
                    />
                    <p className="data">{data}</p>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;
