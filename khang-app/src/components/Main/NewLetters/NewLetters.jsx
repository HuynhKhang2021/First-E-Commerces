import React from "react";
import "./NewLetters.scss";
const NewLetters = () => {
  return (
    <div
      className="letters"
      style={{
        backgroundImage:
          "url(https://flatsometutorial.com/wp-content/uploads/2020/03/image-11-of-12.jpg)",
      }}
    >
      <div className="letters-overlay">
        <div className="letters-content">
          <h1 className="letters-heading">NEWSLETTER</h1>
          <p className="letters-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <h6 className="letters-email">Your email</h6>
          <input className="letters-input"></input>
          <button className="letters-btn btn-dark">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default NewLetters;
