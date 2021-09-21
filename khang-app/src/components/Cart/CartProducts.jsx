import React from "react";
import CartProduct from "./CartProduct";
const DUMMY_CART = [
  {
    id: 1,
    name: "e-phonez",
    price: 500,
    quantity: 1,
    image:
      "https://flatsometutorial.com/wp-content/uploads/2020/03/product-5-300x300.jpg",
  },
  {
    id: 2,
    name: "e-phonez",
    price: 500,
    quantity: 3,
    image:
      "https://flatsometutorial.com/wp-content/uploads/2020/03/product-5-300x300.jpg",
  },
];
const CartProducts = () => {
  return (
    <div className="cart-products col-lg-7">
      <div className="cart-heading row">
        <h6 className="cart-heading_product col-4">product</h6>
        <h6 className="cart-heading_price pl-0 col-2">price</h6>
        <h6 className="cart-heading_quantity col-2">quantity</h6>
        <h6 className="cart-heading_subtotal col-4">subtotal</h6>
      </div>
      {DUMMY_CART.map((item) => (
        <CartProduct
          key={item.id}
          item={{
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          }}
        />
      ))}
      <div className="cart-product__btn">
          <button className="cart-product__btn-shop">
              
          </button>
          <button className="cart-product__btn-update"></button>
      </div>
    </div>
  );
};

export default CartProducts;
