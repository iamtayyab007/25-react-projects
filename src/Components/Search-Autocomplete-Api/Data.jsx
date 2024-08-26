{
  /*

import React from "react";

export const Data = ({ suggestions, handleClick }) => {
  return (
    <div>
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

*/
}

import React from "react";

export const Data = ({ data, handleOnClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleOnClick}>
              {" "}
              {item}
            </li>
          ))
        : "null"}
    </ul>
  );
};
