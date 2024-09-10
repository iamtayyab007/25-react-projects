import React from "react";
import useWindowResize from ".";

export const Test = () => {
  const windowsResize = useWindowResize();
  const { width, height } = windowsResize;

  return (
    <div>
      <h1>Windows Resize</h1>
      <p>{height}</p>
      <p>{width}</p>
    </div>
  );
};
