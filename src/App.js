import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";
import NavBar from "./components/NavBar/NavBar";
import { keys } from "./keys";

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const set = new Set();
const word = makeid(5);

function App() {
  const [guesses, setGuesses] = useState(
    new Array(6).fill(null).map(() => new Array(5).fill(""))
  );

  // const [entered, setEntered] = useState(false);

  const [lastInsertedRow, setLastInsertedRow] = useState(0);

  const [lastInsertedColumn, setLastInsertedColumn] = useState(0);

  const [rowSelected, setRowSelected] = useState([]);

  const isValid = (row, column) => {
    return row <= 5 && column <= 4;
  };

  const handleWordPress = (key) => {
    if (!isValid(lastInsertedRow, lastInsertedColumn)) {
      return;
    }
    const newGuesses = [...guesses];

    newGuesses[lastInsertedRow][lastInsertedColumn] = key;
    setGuesses(newGuesses);

    setLastInsertedColumn((state) => state + 1);
  };

  const handleEnter = () => {
    if (
      lastInsertedColumn <= 4 &&
      guesses[lastInsertedRow][lastInsertedColumn] === ""
    ) {
      window.alert("Not enough letter");
      return;
    }
    const guess = guesses[lastInsertedRow].join("");

    if (guess === word) {
      window.alert("WINNER!");
      return;
    }

    if (lastInsertedRow === guesses.length - 1) {
      window.alert("GAME OVER!");
      return;
    }
    setRowSelected([...rowSelected, lastInsertedRow]);
    setLastInsertedRow((state) => state + 1);
    setLastInsertedColumn(0);
  };

  const handleBackspace = () => {
    if (lastInsertedColumn <= 0) {
      return;
    }
    const newGuesses = [...guesses];

    newGuesses[lastInsertedRow][lastInsertedColumn - 1] = "";

    setGuesses(newGuesses);

    setLastInsertedColumn((state) => state - 1);
  };
  console.log(lastInsertedColumn);

  const keyboard = keys(handleWordPress, handleEnter, handleBackspace);

  rowSelected.forEach((current) => {
    guesses[current].forEach((key) => {
      set.add(key);
    });
  });

  console.log(set);

  return (
    <div className="App">
      <NavBar />
      <div className="Wrapper">
        <Grid word={word} guesses={guesses} rowsSelected={rowSelected} />
        <Keyboard keys={keyboard} />
      </div>
    </div>
  );
}

export default App;
