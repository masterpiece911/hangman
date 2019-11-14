import React, { useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Word from './word';
import Status from './status';
import ResetButton from './reset_button';
import AlphabetButtons from './alphabet_buttons';
import {
  randomWord, resetRevealedMap, resetTries, gameFinished,
} from './gameHelpers';

export function Game() {
  const [word, setWord] = useState(randomWord());
  const [letters, setLetters] = useState([...word]);
  const [revealedMap, setRevealedMap] = useState(resetRevealedMap());
  const [tries, setTries] = useState(resetTries());
  const title = '==> hangman. <==';

  const isGameFinished = gameFinished(tries, letters);

  const letterSelected = (char) => {
    if (revealedMap.get(char)) {
      return;
    }

    const newMap = new Map(revealedMap);
    newMap.set(char, true);
    if (!word.includes(char)) {
      setTries(tries - 1);
    } else {
      setLetters(letters.filter((i) => i !== char));
    }
    setRevealedMap(newMap);
  };

  const resetGame = () => {
    const newWord = randomWord();
    setLetters([...newWord]);
    setWord(newWord);
    setRevealedMap(resetRevealedMap());
    setTries(resetTries());
  };

  const keyboardEntry = (entry) => {
    if (entry === 'enter') {
      resetGame();
    } else if (!isGameFinished) {
      letterSelected(entry.toUpperCase());
    }
  };

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={[...'abcdefghijklmnopqrstuvwxyz', 'enter']}
        handleFocusableElements
        onKeyEvent={(key) => keyboardEntry(key)}
      />
      <div
        className="titleContainer title fira"
      >
        {title}
      </div>
      <div className="wordContainer">
        <Word
          word={word}
          revealed={revealedMap}
          isGameFinished={isGameFinished}
        />
      </div>
      <Status
        tries={tries}
        isGameFinished={isGameFinished}
      />
      <div
        className="alphabetContainer"
        style={{
          visibility: isGameFinished ? 'hidden' : 'visible',
          display: isGameFinished ? 'none' : 'block',
        }}
      >
        <AlphabetButtons
          word={word}
          revealed={revealedMap}
          onLetterSelected={letterSelected}
        />
      </div>
      <div className="resetButtonContainer">
        <ResetButton
          onClick={() => resetGame()}
        />
      </div>
    </div>
  );
}

// module.exports = Game;
export default Game;
