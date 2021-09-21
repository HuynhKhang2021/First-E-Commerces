import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="footer-sections row">
        <div className="footer-description col col-lg-3">
          <h6 className="footer-description__heading">HOW WE GOT STARTED</h6>
          <div className="footer-description__content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </div>
        </div>
        <div className="footer-news col col-lg-3">
          <h6 className="footer-news__heading">latest news</h6>
          <ul className="footer-news__list">
            <li className="footer-news__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/blog-post-2-150x150.jpg"
                alt=""
                className="footer-news__img"
              />
              <a href="" className="li footer-news__link">
                Good place to study
              </a>
            </li>
            <li className="footer-news__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/camera-table-150x150.jpg"
                alt=""
                className="footer-news__img"
              />
              <a href="" className="li footer-news__link">
                A new camera to buy
              </a>
            </li>
            <li className="footer-news__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/blog-post-3-150x150.jpg"
                alt=""
                className="footer-news__img"
              />
              <a href="" className="li footer-news__link">
                10 best laptops
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-products col col-lg-3">
          <h6 className="footer-products__heading">products</h6>
          <ul className="footer-products__list">
            <li className="footer-products__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/product-20-300x330-1-100x100.jpg"
                alt=""
                className="footer-products__item-img"
              />
              <span className="footer-products__item-content">
                <a href="" className="footer-products__item-name">
                  I-Phone Z
                </a>
                <h6 className="footer-products__item-price">$600.00</h6>
              </span>
            </li>
            <li className="footer-products__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/product-5-100x100.jpg"
                alt=""
                className="footer-products__item-img"
              />
              <span className="footer-products__item-content">
                <a href="" className="footer-products__item-name">
                  E-Phone Z
                </a>
                <h6 className="footer-products__item-price">$500.00</h6>
              </span>
            </li>
            <li className="footer-products__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/product-7-100x100.jpg"
                alt=""
                className="footer-products__item-img"
              />
              <span className="footer-products__item-content">
                <a href="" className="footer-products__item-name">
                  Super Cell
                </a>
                <h6 className="footer-products__item-price">$599.99</h6>
              </span>
            </li>
            <li className="footer-products__item">
              <img
                src="https://flatsometutorial.com/wp-content/uploads/2020/03/Image-25-100x100.jpg"
                alt=""
                className="footer-products__item-img"
              />
              <span className="footer-products__item-content">
                <a href="" className="footer-products__item-name">
                  Camo Headphones
                </a>
                <h6 className="footer-products__item-price">$200.00</h6>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-letter col col-lg-3">
          <h6 className="footer-letter__heading">new letter</h6>
          <form action="" className="footer-letter__form">
            <p className="footer-letter__email">Email address:</p>
            <input
              type="text"
              placeholder="Your email address"
              className="footer-letter__input"
            />
            <button className="footer-letter__btn btn-dark">SIGN UP</button>
          </form>
        </div>
      </div>
      <div className="footer-pay">
        <div className="footer-pay_list">
          <span className="footer-pay_item">
            <i class="footer-pay_icon fab fa-stripe"></i>
          </span>
          <span className="footer-pay_item">
            <i class="footer-pay_icon fab fa-cc-paypal"></i>
          </span>
          <span className="footer-pay_item">
            <i class="footer-pay_icon fab fa-cc-visa"></i>
          </span>
          <span className="footer-pay_item">
            <i class="footer-pay_icon fab fa-cc-mastercard"></i>
          </span>
          <span className="footer-pay_item">
            <i class="footer-pay_icon fab fa-amazon"></i>
          </span>
        </div>
        <p className="footer-pay_copy">
          Copyright 2021 © <b> UX Themes</b>
        </p>
      </div>
      <div className="footer-notice">
        <p className="footer-notice_text">
          New Flatsome Theme Tutorial is LIVE!{" "}
          <a href="https://www.youtube.com/watch?v=Hjto35ir490">
            https://www.youtube.com/watch?v=Hjto35ir490
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
