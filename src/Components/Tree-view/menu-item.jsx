import React from "react";
import { MenuList } from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./style.css";

export const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
    console.log(displayCurrentChildren);
  };
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>

        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
