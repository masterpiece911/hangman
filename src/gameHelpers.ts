import { generate } from "random-words";

export const resetTries = () => 8;

export const resetRevealedMap = () =>
  new Map([..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((char) => [char, false]));

export const randomWord = () => generate({minLength: 5}) as string

export const gameFinished = (tries: number, letters: string[]) => {
  if (tries === 0 || letters.length === 0) {
    return true;
  }
  return false;
};

export const hasRevealedLetter = (revealedMap: Map<string, boolean>) => {
  const revealedValues = Array.from(revealedMap.values());
  return revealedValues.some((value) => value === true);
};
