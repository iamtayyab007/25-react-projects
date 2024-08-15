import React from "react";
import { MenuItem } from "./menu-item";
import "./style.css";
export const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};
