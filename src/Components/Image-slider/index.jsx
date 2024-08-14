import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const circlesArray = new Array(5).fill(0);

  const handleleft = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleright = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handleclick = (index) => {
    setCurrentSlide(index);
  };

  async function fetchUrl(url) {
    try {
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const result = await response.json();
      console.log("", result);
      setImages(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);
  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow-left"
          size={40}
          onClick={handleleft}
          style={{ cursor: "pointer" }}
        />
        {images.length === 0 ? (
          <p>No images found</p>
        ) : (
          images.map((item, index) => (
            <img
              src={item.download_url}
              alt={`Image ${index}`}
              key={item.id}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        )}
        <BsArrowRightCircleFill
          size={40}
          className="arrow-right"
          onClick={handleright}
          style={{ cursor: "pointer" }}
        />
        <div className="outer-circle">
          {images.map((_, index) => (
            <div
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              key={index}
              onClick={() => handleclick(index)}
              style={{ cursor: "pointer" }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
