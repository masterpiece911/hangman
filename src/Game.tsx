import Word from "./Word.tsx";
import Status from "./Status.tsx";
import ResetButton from "./ResetButton.tsx";
import Keyboard from "./Keyboard.tsx";
import Title from "./Title.tsx";
import useGame, { type GameOptions } from "./useGame.ts";
import useKeyboard from "./useKeyboard.ts";
import type { UseKeyboardOptions } from "./useKeyboard.ts";

const OPTIONS: GameOptions = {
  minLength: 5,
  maxLength: Infinity,
  maxTries: 8,
};

export function Game() {
  const {
    play,
    playedLetters,
    revealedWord,
    remainingTries,
    resetGame,
    onLetter,
  } = useGame(OPTIONS);

  const keyboardOptions: UseKeyboardOptions = {
    handlers: {
      " ": (e) => {
        e.preventDefault();
        resetGame();
      },
      Enter: (e) => {
        e.preventDefault();
        resetGame();
      },
    },
    onLetter: (_, letter) => {
      onLetter(letter);
    },
    target: document,
  };

  useKeyboard(keyboardOptions);

  return (
    <div>
      <Title tries={remainingTries} playState={play} />
      <Word revealedWord={revealedWord} />
      <Status tries={remainingTries} playState={play} />
      <Keyboard playedLetters={playedLetters} onLetter={onLetter} />
      <ResetButton onClick={() => resetGame()} />
    </div>
  );
}

export default Game;
