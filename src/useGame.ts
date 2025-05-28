import { useCallback, useState } from "react";
import { generate as randomWord } from "random-words";

export type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

type Word = string;
export type LetterMap = Map<Alphabet, LetterState>;
export type RevealedWord = (string | null)[];
export type Play = "WIN" | "LOSE" | "PLAYING" | "START";
export type LetterState = "VALID" | "INVALID" | "UNPLAYED";
export type LetterCallback = (char: string) => void;

type GameState = {
  word: Word;
  playedLetters: LetterMap;
  tries: number;
};

export type GameOptions = {
  minLength?: number;
  maxLength?: number;
  maxTries?: number;
};

export type Game = {
  resetGame: () => void;
  onLetter: LetterCallback;
  remainingTries: number;
  playedLetters: LetterMap;
  revealedWord: RevealedWord;
  play: Play;
};

function newGame({
  minLength = 5,
  maxLength = Infinity,
  maxTries = 8,
}: GameOptions): GameState {
  const newState = {
    tries: maxTries,
    word: randomWord({ minLength, maxLength }) as string,
    playedLetters: new Map<Alphabet, LetterState>(),
  };
  return newState;
}

function playLetter(gameState: GameState, char: string): GameState {
  const letter = char.toLowerCase()[0] as Alphabet;
  const playedBefore = gameState.playedLetters.has(letter);
  const letterInWord = gameState.word.toLowerCase().includes(letter);
  const shouldDecrease = !playedBefore && !letterInWord;
  return {
    ...gameState,
    playedLetters: gameState.playedLetters.set(
      letter,
      letterInWord ? "VALID" : "INVALID"
    ),
    tries: shouldDecrease ? (gameState.tries -= 1) : gameState.tries,
  };
}

function getRevealedLetters(gameState: GameState): RevealedWord {
  const playState = getPlay(gameState);
  if (playState === "WIN" || playState === "LOSE")
    return Array.from(gameState.word.toLowerCase());
  else
    return Array.from(gameState.word.toLowerCase()).map((char) =>
      gameState.playedLetters.has(char.toLowerCase() as Alphabet) ? char : null
    );
}

function getPlay(gameState: GameState): Play {
  if (gameState.playedLetters.size === 0) return "START";
  if (
    gameState.tries > 0 &&
    Array.from(gameState.word.toLowerCase()).every((letter) =>
      gameState.playedLetters.get(letter.toLowerCase() as Alphabet)
    )
  )
    return "WIN";
  if (gameState.tries === 0) return "LOSE";
  return "PLAYING";
}

function gameIsRunning(gameState: GameState): boolean {
  return ["PLAYING", "START"].includes(getPlay(gameState));
}

export default function useGame(options: GameOptions): Game {
  const [state, setState] = useState(newGame(options));

  const resetGame = useCallback(() => setState(newGame(options)), [options]);
  const onLetter = useCallback(
    (letter: string) => {
      setState((state) => {
        if (gameIsRunning(state)) return playLetter(state, letter);
        return state;
      });
    },
    [setState]
  );

  return {
    playedLetters: state.playedLetters,
    revealedWord: getRevealedLetters(state),
    resetGame,
    play: getPlay(state),
    remainingTries: state.tries,
    onLetter,
  };
}
