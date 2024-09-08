import React, { useRef } from "react";
import { useState } from "react";
import useOutsideClick from "./text";

export const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <div>
      <div>
        {showContent ? (
          <div ref={ref}>
            <h1>This is the content</h1>
            <p>This is the paragraph</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <button onClick={() => setShowContent(true)}>Show Content</button>
    </div>
  );
};
