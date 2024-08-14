import React from "react";
import { useState } from "react";

export const RandomColor = () => {
  const [color, setColor] = useState("");
  const handleClick = () => {
    let hexColor = "#";
    let letter = "ABCDEF0123456789";

    for (let index = 0; index < 6; index++) {
      const myRandom = Math.floor(Math.random() * letter.length);
      hexColor += letter[myRandom];
    }
    setColor(hexColor);
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "90px",
          fontSize: "40px",
        }}
      >
        <button onClick={handleClick}>Generate Random Color</button>
        <h1>{color}</h1>
      </div>
    </>
  );
};
