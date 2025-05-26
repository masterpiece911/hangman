import classes from "./keyboard.module.css";
import LetterButton from "./LetterButton";
import type { Alphabet, LetterCallback, LetterMap } from "./useGame";

type KeyboardProps = {
  playedLetters: LetterMap;
  onLetter: LetterCallback;
};
const alphabet: Alphabet[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard({ playedLetters, onLetter }: KeyboardProps) {
  const alphabetItems = alphabet.map((char) => (
    <li key={char}>
      <LetterButton
        onClick={() => onLetter(char)}
        letter={char.toUpperCase()}
        letterState={playedLetters.get(char)}
      />
    </li>
  ));

  return (
    <div className={classes["keyboard"]}>
      <ul>{alphabetItems}</ul>
    </div>
  );
}

export default Keyboard;
