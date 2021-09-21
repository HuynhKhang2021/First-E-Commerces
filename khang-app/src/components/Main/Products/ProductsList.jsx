import React from "react";
import ProductItem from "./ProductItem";
import "./ProductsList.scss";
const ProductsList = ({ productsList }) => {
  productsList.map(product => product)
  return (
    <div className="products row">
      <div className="products-title col-12">
        <div className="products-title__line col-4"></div>
        <h1 className="products-title__heading col-4">FEATURED PRODUCTS</h1>
        <div className="products-title__line col4"></div>
      </div>
      {productsList.map((product) => (
        <ProductItem key={product.id} product={
          {
            id: product.id,
            price: product.price,
            name: product.name,
            type: product.type,
            description: product.description,
            image: product.image,
          }
        }/>
      ))}
    </div>
  );
};

export default ProductsList;
