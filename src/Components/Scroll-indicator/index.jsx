import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState("");
  const [scrollIndicator, setScrollIndicator] = useState("");

  function handleScroll() {
    const windowscroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (windowscroll / height) * 100;
    setScrollIndicator(scrolled);
  }

  async function fetchUrl() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <div className="top-container">
        <div className="header">
          <div
            className="progress-bar"
            style={{ width: `${scrollIndicator}%` }}
          ></div>
        </div>
      </div>
      <div className="item">
        {data && data.length > 0
          ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};
