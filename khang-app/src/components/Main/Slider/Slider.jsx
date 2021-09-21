import React from "react";
import "./Slider.scss";
const Slider = () => {
  return (
    <>
      <div className="slider row">
        <div className="slider-content col col-sm-12 col-md-12 col-lg-5">
          <h6 className="small-title">SPACE JUST GOT PERSONAL</h6>
          <h1 className="big-title">NEW COMMERCE TUTORIAL</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <div className="price">$3,495</div>
          <div className="slider-btn">
            <button className="watch-btn">
              <i class="fas fa-shopping-cart"></i>WATCH NOW!
            </button>
            <button className="info-btn">
              More info
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <a href="" className="slider-down">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </>
  );
};

export default Slider;
