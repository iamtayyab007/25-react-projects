import React from "react";
import QRCode from "react-qr-code";
import "./styles.css";
import { useState } from "react";

export const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [QrCode, setQrCode] = useState("");

  const handleClick = () => {
    setQrCode(input);
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={input}
          placeholder="enter text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>
        <QRCode value={QrCode} id="qr-code" />
      </div>
      <button
        className="btn"
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleClick}
      >
        Generate QR Code
      </button>
    </div>
  );
};
