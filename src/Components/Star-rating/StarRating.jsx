import React from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

const StarRating = ({ numberOfStars }) => {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);
  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        const starIndex = index + 1;

        return (
          <FaStar
            key={index}
            size={70}
            color={
              starIndex <= (hoveredStar || selectedStar) ? "gold" : "black"
            }
            onMouseEnter={() => setHoveredStar(starIndex)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => setSelectedStar(starIndex)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
