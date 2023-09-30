import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import image1 from "/public/images/image1.jpeg";
import image2 from "/public/images/homePage.png";
import "./Hero.css";

const Hero = () => {
  const buttonData = {
    AppStore: (
      <svg
        fill="#ffffff"
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="0.288"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path>{" "}
        </g>
      </svg>
    ),
    GooglePlay: (
      <svg
        fill="#ffffff"
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path>
        </g>
      </svg>
    ),
  };
  return (
    <div className="hero-section">
      <Navbar />

      <div class="main">
        <div class="leftside">
          <div class="headings capital">
            <h1 className="w-700">Empower Your Contractor Journey</h1>
            <h2 className="w-400">With Our Cutting-Edge App</h2>
          </div>
          <div class="description">
            <p>
              Specifically designed for government contractors, our app enables
              you to effortlessly manage government contracts.
            </p>
            <div class="buttons">
              <button className="btn cta-btn upper">
                get started for free <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="rightside">
          <div class="image1">
            <img src={image1} alt="image1" />
          </div>
          <div class="image2">
            <img src={image2} alt="image2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
