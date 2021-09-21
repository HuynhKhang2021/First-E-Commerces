import React from "react";
import "./CartContent.scss";
import CartProducts from "./CartProducts";
import CartCheckout from "./CartCheckout";

const CartContent = () => {
  return (
    <div className="cart-content mb-4">
      <div className="row">
        <CartProducts />
        <CartCheckout />
      </div>
    </div>
  );
};

export default CartContent;
