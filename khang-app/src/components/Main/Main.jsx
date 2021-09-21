import React, { useState, useCallback, useEffect } from "react";
import Slider from "./Slider/Slider";
import Banners from "./Banners/Banners";
import ProductsList from "./Products/ProductsList";
import NewLetters from "./NewLetters/NewLetters";
const Main = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProductsList = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-http-da00e-default-rtdb.firebaseio.com/productsList.json"
      );
      if (!response.ok) {
        throw new Error("Some thing went wrong");
      }
      const data = await response.json();
      const products = data.products;
      const productsLoad = [];
      for (var i in products) {
        productsLoad.push({
          id: products[i].id,
          name: products[i].name,
          type: products[i].type,
          price: products[i].price,
          description: products[i].description,
          image: products[i].url,
        });
      }
      setProductsList(productsLoad);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);
  return (
    <div className="container-fluid">
      <Slider></Slider>
      <Banners />
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && <ProductsList productsList={productsList} />}

      <NewLetters />
    </div>
  );
};

export default Main;
