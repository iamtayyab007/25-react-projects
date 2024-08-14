import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export const LoadMore = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  async function fetchProductList() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const result = await response.json();
    setProduct((prev) => [...prev, ...result.products]);
  }

  useEffect(() => {
    fetchProductList();
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (product.length === 100) {
      setDisable(true);
    }
  }, [product]);
  return (
    <div>
      <div className="container">
        <div className="products">
          {product.map((items, index) => (
            <div className="products-list" key={index}>
              <img src={items.thumbnail} alt="" />
              <p>{items.description}</p>
            </div>
          ))}
        </div>
        <button disabled={disable} onClick={handleClick}>
          {disable ? "The number of loading items exceeded" : "Load More"}
        </button>
      </div>
    </div>
  );
};
