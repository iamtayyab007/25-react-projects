{
  /*
  
import React from "react";
import "./style.css";

export const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div className="modal-container">
      <span className="icons" onClick={onClose}>
        &times;
      </span>
      <div className="header">{header}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};
*/
}

import React from "react";
import "./style.css";

export const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="headers">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2> {header ? header : "headers"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our body</p>
            </div>
          )}
        </div>
        <div className="footer">
          <h2>{footer ? footer : "footer"}</h2>
        </div>
      </div>
    </div>
  );
};
