import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import styled from "styled-components";
import Word from "./word";
import Status from "./status";
import ResetButton from "./reset_button";
import AlphabetButtons from "./alphabet_buttons";
import {
  randomWord,
  resetRevealedMap,
  resetTries,
  gameFinished,
} from "./gameHelpers";
import Title from "./title";

const Wrapper = styled.div`
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css);

  @import url("https://rsms.me/inter/inter.css");

  width: 75%;
  margin: auto;
  flex-flow: column nowrap;
  display: flex;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export function Game() {
  const [word, setWord] = useState(randomWord());
  const [letters, setLetters] = useState(Array.from(new Set([...word])));
  const [revealedMap, setRevealedMap] = useState(resetRevealedMap());
  const [tries, setTries] = useState(resetTries());
  // const title = '==> hangman. <==';

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
    setLetters(Array.from(new Set([...newWord])));
    setWord(newWord);
    setRevealedMap(resetRevealedMap());
    setTries(resetTries());
  };

  const keyboardEntry = (entry) => {
    if (entry === "enter" || entry === "space") {
      resetGame();
    } else if (!isGameFinished) {
      letterSelected(entry.toUpperCase());
    }
  };

  return (
    <Wrapper>
      <KeyboardEventHandler
        handleKeys={[..."abcdefghijklmnopqrstuvwxyz", "enter", "space"]}
        handleFocusableElements
        onKeyEvent={(key) => keyboardEntry(key)}
      />
      <Title
        tries={tries}
        isGameFinished={isGameFinished}
        // gameStarted={revealedMap.values().includes(true)}
        gameStarted={Array.from(revealedMap.values()).includes(true)}
      />
      <Word
        word={word}
        revealed={revealedMap}
        isGameFinished={isGameFinished}
      />
      <Status tries={tries} isGameFinished={isGameFinished} />
      <AlphabetButtons
        isGameFinished={isGameFinished}
        word={word}
        revealed={revealedMap}
        onLetterSelected={letterSelected}
      />
      <ResetButton onClick={() => resetGame()} />
    </Wrapper>
  );
}

// module.exports = Game;
export default Game;
