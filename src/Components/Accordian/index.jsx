import React from "react";
import data from "./data";
import "./styles.css";
import { useState } from "react";

export const Accordian = () => {
  const [selected, setSelected] = useState([]);
  console.log(selected);
  //const [multiAccordian, setMultiAccordian] = useState([]);
  const [isMultiAccordian, setIsMultiAccordian] = useState(false);
  const handleClick = (id) => {
    if (isMultiAccordian) {
      if (selected.includes(id)) {
        setSelected(selected.filter((item) => item !== id));
      } else {
        setSelected([...selected, id]);
      }
    } else {
      setSelected(selected.includes(id) ? [] : [id]);
    }
  };
  const handleBtn = () => {
    // const ids = data.map((items) => items.id);
    // setMultiAccordian(ids);
    // setIsMultiAccordian(true);
    setIsMultiAccordian(!isMultiAccordian);
    // console.log(ids);
  };
  // const handleMulti = (id) => {
  //   setMultiAccordian(id);
  //   if (multiAccordian.includes(id)) {
  //     setMultiAccordian(multiAccordian.filter((item) => item.id !== id));
  //   } else {
  //     setMultiAccordian([...multiAccordian, id]);
  //  }
  return (
    <div className="Accordian">
      <h1>Accordian</h1>
      <button className="btn" onClick={handleBtn}>
        Enable Multi-Accordian
      </button>
      {data.map((items) => (
        <div
          className="name"
          key={items.id}
          onClick={() => handleClick(items.id)}
        >
          <div className="title">
            {items.question}
            <span>+</span>
          </div>
          <div className="content">
            {selected.includes(items.id) ? items.answer : null}
          </div>
        </div>
      ))}
    </div>
  );
};
