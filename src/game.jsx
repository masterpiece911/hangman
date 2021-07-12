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
  const aWord = randomWord();

  const [{ word, letters, revealedMap, tries }, setGameState] = useState({
    word: aWord,
    letters: Array.from(new Set([...aWord])),
    revealedMap: resetRevealedMap(),
    tries: resetTries(),
  });

  const isGameFinished = gameFinished(tries, letters);

  const letterSelected = (char) => {
    if (revealedMap.get(char)) {
      return;
    }

    const newMap = new Map(revealedMap);
    newMap.set(char, true);
    setGameState({
      word,
      letters: word.includes(char)
        ? letters.filter((i) => i !== char)
        : letters,
      revealedMap: newMap,
      tries: word.includes(char) ? tries : tries - 1,
    });
  };

  const resetGame = () => {
    const newWord = randomWord();
    setGameState({
      word: newWord,
      letters: Array.from(new Set([...newWord])),
      revealedMap: resetRevealedMap(),
      tries: resetTries(),
    });
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
