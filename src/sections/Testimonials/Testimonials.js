import React from "react";
import "./Testimonials.css";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className="testimonial__wrapper">
      <div className="testimonial-container">
        <h1 className="title">what our client say</h1>
        {testimonials.map((testimonial) => (
          <div className="testimonial">
            <p className="review">{testimonial.review}</p>
            <div className="user-data">
              <img className="avatar" src={testimonial.img} />
              <p className="c-white w-500">{testimonial.name}</p>
              <p style={{ color: "#39FFC4", fontWeight: "500px" }}>
                {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
