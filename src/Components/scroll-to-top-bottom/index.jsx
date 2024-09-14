import React from "react";
import "./style.css";
import { useState } from "react";

export const ScrollingTopBottom = () => {
  const [scrolledValue, setScrolledValue] = useState("");
  const handleClick = () => {
    if (window.scrollY === 0) {
      window.scrollTo({ top: document.documentElement.scrollHeight });
      setScrolledValue(100);
    } else {
      window.scrollTo({ top: 0 });
      setScrolledValue(0);
    }
  };
  return (
    <div className="btn-container">
      <div className="txt">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis amet
        possimus delectus ipsum voluptatibus magnam ratione ea totam. Nam at
        quibusdam ut inventore vitae eaque, dicta aliquid debitis doloremque
        officia? Ullam qui consectetur similique at sunt blanditiis provident
        cum excepturi, maiores veniam in suscipit recusandae, doloribus soluta
        quas facilis doloremque, minus mollitia? Asperiores, non quibusdam animi
        exercitationem eos minima fugiat! Nisi deleniti molestias maiores eos.
        Ipsum fugit ad unde consectetur omnis architecto repellat! Odio rem
        totam velit tempore officiis vitae eius quibusdam animi illum delectus
        consequatur consectetur, maxime nobis nam?
      </div>

      <div className="button">
        <button onClick={handleClick}>
          {scrolledValue === 100 ? "^" : "V"}
        </button>
      </div>
    </div>
  );
};
