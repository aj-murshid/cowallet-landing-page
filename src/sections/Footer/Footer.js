import React from "react";
import "./Footer.css";
import EnquiryCard from "../../components/EnquiryCard/EnquiryCard";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer-card">
        <EnquiryCard />
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-links">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Connect with Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <p>
                <i class="fa-solid fa-phone icon"></i>{" "}
                <a href="tel:+917907707474">+91 79077 07474</a>
              </p>
              <p>
                <i class="fa-solid fa-envelope icon"></i>{" "}
                <a href="mailto:ajfuturedevelopment@gmail.com">
                  ajfuturedevelopment@gmail.com
                </a>
              </p>
              <p>
                <i class="fa-solid fa-globe icon"></i>{" "}
                <a href="https://ajfuture.in/" target="_blank" rel="noreferrer noopener">ajfuture.in</a>
              </p>
            </div>
            <div className="footer-contact">
              <h4>Office address</h4>
              <p>AJ Future Development LLP, </p>
              <p>Malappuram, Kerala</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; 2023{" "}
            <a href="https://ajfuture.in/">aj future development llp</a> All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
