import React from "react";
import "./ProductItem.scss";
const ProductItem = (props) => {
  return (
    <div className="product col col-sm-6 col-md-4 col-lg-3">
      <div className="product__overview col-inner">
          <div className="product__img-view">
        <img
          src={props.product.image}
          alt=""
          className="product-image"
        />
        <div className="product-buy">
          <i class="fas fa-shopping-bag product-buy__icon"></i>
          <button className="product-buy__view btn-dark">QUICK VIEW</button>
        </div>
          </div>
        <div className="product-info">
          <p className="product-info__type">{props.product.type}</p>
          <p className="product-info__name">{props.product.name}</p>
          <h6 className="product-info__price">${props.product.price}</h6>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
