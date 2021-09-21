import React from "react";
import "./Banners.scss";
const Banners = () => {
  return (
    <div className="banner">
      <div className="banner-section row">
        <div className="banner-section__active col-inner col-lg-4">
          <img
            src="https://solve.flatelements.com/wp-content/uploads/2019/04/cart.png"
            alt=""
            className="banner-section__active-img"
          />
          <h6 className="banner-section__active-title">Priority Shipping</h6>
          <p className="banner-section__active-text">
            Not sure if you know this But when we first met I got so nervous
          </p>
        </div>
        <div className="banner-section__active col-inner col-lg-4">
          <img
            src="https://solve.flatelements.com/wp-content/uploads/2019/04/return.png"
            alt=""
            className="banner-section__active-img"
          />
          <h6 className="banner-section__active-title">Fuss Free Returns</h6>
          <p className="banner-section__active-text">
            Not sure if you know this But when we first met I got so nervous
          </p>
        </div>
        <div className="banner-section__active col-inner col-sm-12 col-md-4 col-lg-4">
          <img
            src="https://solve.flatelements.com/wp-content/uploads/2019/04/living-room.png"
            alt=""
            className="banner-section__active-img"
          />
          <h6 className="banner-section__active-title">In-home Setup</h6>
          <p className="banner-section__active-text">
            Not sure if you know this But when we first met I got so nervous
          </p>
        </div>
      </div>
      <div className="banner-fill">
          <div className="banner-fill__content col-sm-12 col-md-4 col-lg-4">
            <div
              className="banner-fill__image "
              style={{
                backgroundImage:
                  "url(https://flatsometutorial.com/wp-content/uploads/2020/03/product-10.jpg)",
              }}
            ></div>
            <div className="banner-fill__overlay"></div>
            <h1 className="banner-fill__text">50% OFF Watches</h1>
          </div>
          <div className="banner-fill__content col-sm-12 col-md-4 col-lg-4">
            <div
              className="banner-fill__image "
              style={{
                backgroundImage:
                  "url(https://flatsometutorial.com/wp-content/uploads/2020/03/banner-3.jpg)",
              }}
            ></div>
            <div className="banner-fill__overlay"></div>
            <h1 className="banner-fill__text">On Sale Laptops</h1>
          </div>

          <div className="banner-fill__content col-sm-12 col-md-4 col-lg-4">
            <div
              className="banner-fill__image "
              style={{
                backgroundImage:
                  "url(https://flatsometutorial.com/wp-content/uploads/2020/03/hero-1-1024x306.jpg)",
              }}
            ></div>
            <div className="banner-fill__overlay"></div>
            <h1 className="banner-fill__text">New Headphones</h1>
          </div>
      </div>
    </div>
  );
};

export default Banners;
