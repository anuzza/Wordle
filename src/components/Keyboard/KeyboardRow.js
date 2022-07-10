import React from "react";
import "./Keyboard.css";
import KeyboardBox from "./KeyboardBox";

const KeyboardRow = ({ keys }) => {
  return (
    <div className="KeyboardRow">
      {keys.map((value, index) => (
        <KeyboardBox key={index} value={value} />
      ))}
    </div>
  );
};

export default KeyboardRow;
