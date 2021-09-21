import React from "react";
import "./NavBar.scss";
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css'
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to='/' href="" className="navbar-brand" style={{zIndex: 10}}>
        <img
          src="https://flatsometutorial.com/wp-content/uploads/2020/03/logo.png"
          alt=""
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i class="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="navbar-nav mr-auto">
          <span href="" className="nav-link active">
            <i class="fas fa-search"></i>
            <div>
              <input type="text" placeholder="Search..." />
              <button type="button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </span>

          <NavLink exact to='/' activeClassName='active' className="nav-link">
            Home
          </NavLink>
          <a href="" className="nav-link ">
            Checkout
          </a>
          <NavLink exact to='cart' activeClassName='active' className="nav-link ">
            Cart
          </NavLink>
          <a href="" className="nav-link ">
            <img
              src="https://flatsometutorial.com/wp-content/uploads/2020/03/Image-1-150x150.jpg"
              alt=""
            />
            Shop
          </a>
          <a href="" className="nav-link ">
            Watches
          </a>
          <a href="" className="nav-link ">
            Laptops
          </a>
          <a href="" className="nav-link ">
            Headphones
          </a>
          <a href="" className="nav-link ">
            Contact
          </a>
          <a href="" className="nav-link ml-auto">
            Login / Register
          </a>
        </div>
      </div>
      <div className="navbar-cart">
          <p>Cart/$0.00</p>
          <i class="fas fa-cart-arrow-down cart-icon"></i>
      </div>
    </nav>
  );
};

export default NavBar;
