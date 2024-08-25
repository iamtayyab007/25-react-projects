{
  /*
import React from "react";
import { useState } from "react";
import { Modal } from "./Modal";
import "./style.css";

export const ModalText = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="ModalTest-Container">
      <button onClick={handleToggleModalPopup}>
        {showModalPopup ? "close Modal Popup" : "Open modal popup"}
      </button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header={<div>This is the header</div>}
          body={<div>This is the body</div>}
          footer={<div>This is the footer</div>}
        />
      )}
    </div>
  );
};

*/
}

import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import { RiH1 } from "react-icons/ri";

export const ModalText = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          body={<div>customized body</div>}
          onClose={onClose}
          header={<h2>Customized Header</h2>}
          footer={<h2>Customized Header</h2>}
        />
      )}
    </div>
  );
};
