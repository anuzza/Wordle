import React from "react";
import "./Grid.css";
import GridRow from "./GridRow";

const Grid = ({ word, rowsSelected, guesses }) => {
  return (
    <div className="Grid">
      {guesses.map((guess, index) => {
        return (
          <GridRow
            key={index}
            guess={guess}
            word={word}
            submitted={rowsSelected.includes(index)}
          />
        );
      })}
    </div>
  );
};

export default Grid;
