import React from "react";
import "./Header.scss";
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css'
const Header = () => {
  return (
    <div className="header container-fluid">
      <span className="header-text mr-auto">
        USE THE CODE DARREL10 AT CHECKOUT FOR 10% OFF! 3 DAYS ONLY!
      </span>
      <span className="header-link">
        <a href="" className="header-link_text">
          Assign a menu in Theme Options &#62; Menus
        </a>
        <a href="https://www.facebook.com/profile.php?id=100041674654850"> <i class="facebook fab fa-facebook"></i></a>
        <a href=""> <i class="instagram fab fa-instagram-square"></i></a>
        <a href=""> <i class="tiktok fab fa-tiktok"></i></a>
        <a href=""> <i class="twitter fab fa-twitter"></i></a>
        <a href=""> <i class="envelope far fa-envelope"></i></a>
        <a href=""> <i class="pinterest fab fa-pinterest"></i></a>
        <a href="https://www.youtube.com/watch?v=Hjto35ir490"> <i class="youtube fab fa-youtube"></i></a>
      </span>
    </div>
  );
};

export default Header;
