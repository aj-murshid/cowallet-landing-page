import React from "react";
import "./UpdatesCard.css";
import img1 from "/public/images/addexpense.png";

const UpdatesCard = ({ img, date, title }) => {
  return (
    <>
      <div className="update-card">
        <div className="carddata">
          <img
            src={img}
            alt="update-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "40px",
            }}
          />
          <p className="c-primary">{date}</p>
          <p className="capital w-500">{title}</p>
        </div>
      </div>
    </>
  );
};

export default UpdatesCard;
