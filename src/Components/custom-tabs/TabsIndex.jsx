import React from "react";
import "./style.css";
import { useState } from "react";

{
  /*

export const TabsIndex = ({ Tabscontent }) => {

 
  const [currentIndex, setCurrentIndex] = useState("");

  const HandleClick = (items, label) => {
    setCurrentIndex(items.label === label ? items.content : "");
  };
  return (
    <div className="container">
      <div className="headers">
        {Tabscontent &&
          Tabscontent.map((items, index) => (
            <div
              className={`tabs active-items ${
                items.label === items.label ? "active" : ""
              }`}
              key={index}
              onClick={() => HandleClick(items, items.label)}
            >
              <span>{items.label}</span>
            </div>
          ))}
      </div>

      <div className="content">{currentIndex}</div>
    </div>
  );
};
*/
}

export const TabsIndex = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="headings">
        {tabsContent &&
          tabsContent.map((tabItem, index) => (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
              key={tabItem.label}
            >
              <span className="label">{tabItem.label}</span>
            </div>
          ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};
