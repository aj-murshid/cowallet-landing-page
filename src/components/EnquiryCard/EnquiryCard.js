import React from "react";
import "./EnquiryCard.css";
import FooterImage from "/public/images/footer image.png";

const EnquiryCard = () => {
  return (
    <div className="enquiry">
      <div className="contents">
        <img className="enquiry-img" src={FooterImage} />
        <div className="text-button">
          <div className="enquiry-data">
            <h4 className="c-white w-300 capital">
              affordable pricing for seamless
            </h4>
            <h4 className="c-white w-500 capital">contractor management</h4>
          </div>
          <button className="btn cta-btn contact">contact now</button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryCard;
