import React from "react";
import './CartCheckout.scss'
const CartCheckout = () => {
  return (
    <div className="cart-checkout col-lg-5">
      <form action="" className="cart-checkout__form">
        <h6 className="cart-checkout__heading">cart totals</h6>
        <div className="cart-checkout__subtotal">
          <p className="cart-checkout__subtotal-text">Subtotal</p>
          <h6 className="cart-checkout__subtotal-price">$500</h6>
        </div>
        <div className="cart-checkout__shipping">
          <p className="cart-checkout__shipping-title"></p>
          <span className="cart-checkout__shipping-content">
            <p className="cart-checkout__shipping-free">Free shipping</p>
            <p className="cart-checkout__shipping-address">
              Shipping to <b>CA</b>
            </p>
            <p className="cart-checkout__shipping-change">Change address</p>
          </span>
        </div>
        <div className="cart-checkout__tax">
          <p className="cart-checkout__tax-text">Tax</p>
          <h6 className="cart-checkout__tax-price">$0</h6>
        </div>
        <div className="cart-checkout__total">
          <p className="cart-checkout__total-text">Total</p>
          <h6 className="cart-checkout__total-price">$500</h6>
        </div>
        <button className="cart-checkout__btn btn-dark">
          proceed to checkout
        </button>
        <div className="cart-checkout__coupon">
          <i class="fas fa-tag cart-checkout__coupon-icon"></i>
          <h6 className="cart-checkout__coupon-title">Coupon</h6>
        </div>
        <input type="text" placeholder='Coupon' className="cart-checkout__input" />
        <button className="cart-checkout__coupon-btn">Apply</button>
      </form>
    </div>
  );
};

export default CartCheckout;
