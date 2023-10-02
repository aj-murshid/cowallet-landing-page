import React from "react";
import "./EnquiryCard.css";
import FooterImage from "/public/images/footer3d.png";

const EnquiryCard = () => {
  return (
    <div className="card__wrapper">
      <div className="image-card" style={{ position: "relative" }}>
        <img src={FooterImage} />
      </div>
      <div className="enquiries">
        <h2>Do you have any other enquiries?</h2>
        <p>
          If you have any questions or enquiries, Our consultants will assist
          you.
        </p>
        <div className="enquiry-buttons">
          <button className="btn call-button" style={{ background: "#684CF6" }}>
            <i
              class="fa-solid fa-headphones fa-lg"
              style={{ color: "#ffffff" }}
            ></i>
            <a href="tel:7907707474">+91 79077 07474</a>
          </button>
          <button
            className="btn whatsappp-button"
            style={{ background: "#25D366" }}
          >
            <i class="fa-brands fa-whatsapp fa-lg"></i>
            <a href="https://wa.me/917907707474">+91 79077 07474</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryCard;
