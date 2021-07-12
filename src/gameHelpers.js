import wordGenerator from "random-words";

export const resetTries = () => 8;

export const resetRevealedMap = () =>
  new Map([..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((char) => [char, false]));

export const randomWord = () => {
  let word = "";
  while (word.length <= 5) {
    word = wordGenerator();
  }
  return word.toUpperCase();
};

export const gameFinished = (tries, letters) => {
  if (tries === 0 || letters.length === 0) {
    return true;
  }
  return false;
};

export const hasRevealedLetter = (revealedMap) => {
  const revealedValues = Array.from(revealedMap.values());
  return revealedValues.some((value) => value === true);
};
