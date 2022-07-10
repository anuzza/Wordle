import React from "react";
import "./Keyboard.css";
import KeyboardRow from "./KeyboardRow";

const Keyboard = ({ keys }) => {
  return (
    <div className="Keyboard">
      {keys.map((key, index) => (
        <KeyboardRow key={index} keys={key} />
      ))}
    </div>
  );
};

export default Keyboard;
