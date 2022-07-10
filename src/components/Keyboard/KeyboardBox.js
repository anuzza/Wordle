import React from "react";
import "./Keyboard.css";

const KeyboardBox = ({ value: { key, onClick } }) => {
  return (
    <div className="KeyboardBox" onClick={() => onClick(key)}>
      {key}
    </div>
  );
};

export default KeyboardBox;
