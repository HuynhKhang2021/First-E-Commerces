import React from "react";
import "./CartProduct.scss";
const CartProduct = ({item}) => {
  return (
    <div className="cart-product mr-3">
      <div className="row mr-0">
        <div className="cart-product__info mt-3 mb-3 col-4">
          <i class="far fa-times-circle cart-product__info-icon"></i>
          <img
            src="https://flatsometutorial.com/wp-content/uploads/2020/03/product-5-300x300.jpg"
            alt=""
            className="cart-product__info-img"
          />
          <p className="cart-product__info-name">{item.name}</p>
        </div>
        <h6 className="cart-product__price m-auto pl-0 col-2">${item.price}</h6>
        <div className="cart-product__amount m-auto col-2">
          <div className="cart-product__quantity pl-0">
            <span className="cart-product__quantity-minus">-</span>
            <input
              type="text"
              className="cart-product__quantity-amount"
              disabled
              value={item.quantity}
            />
            <span className="cart-product__quantity-minus">+</span>
          </div>
        </div>
        <h6 className="cart-product__subtotal m-auto pr-0 col-4">${item.quantity * item.price}</h6>
      </div>
    </div>
  );
};

export default CartProduct;
