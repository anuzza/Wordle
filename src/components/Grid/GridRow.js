import React from "react";
import Box from "./Box";
import "./Grid.css";

const WORD_LENGTH = 5;
const GridRow = ({ guess, word, submitted }) => {
  return (
    <div className="GridRow">
      {guess.map((letter, index) => {
        return (
          <Box
            key={index}
            letter={letter}
            word={word}
            index={index}
            submitted={submitted}
          />
        );
      })}
    </div>
  );
};

export default GridRow;
