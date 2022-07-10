import React from "react";
import "./Grid.css";

const Box = ({ letter, index, word, submitted }) => {
  const className = ["Box"];

  if (submitted && letter === word.charAt(index)) {
    className.push("correct");
  } else if (submitted && word.includes(letter)) {
    className.push("contains");
  } else if (submitted && letter != "") {
    className.push("letter");
  }

  return <div className={className.join(" ")}>{letter}</div>;
};

export default Box;
