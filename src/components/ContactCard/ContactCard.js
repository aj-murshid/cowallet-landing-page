import React from "react";
import "./ContactCard.css";
import FooterImage from "/public/images/footer image.png";

const ContactCard = () => {
  return (
    <div className="contact">
      <div className="contents">
        <img className="contact-img" src={FooterImage} />
        <div className="text-button">
          <div className="contact-data">
            <h4 className="c-white w-300 capital" style={{fontSize: "1.3rem"}}>
              affordable pricing for seamless
            </h4>
            <h4 className="c-white w-500 capital" style={{fontSize: "1.3rem"}}>contractor management</h4>
          </div>
          <button className="btn cta-btn contact-btn">contact now</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
