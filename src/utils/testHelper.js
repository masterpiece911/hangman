export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const randomAlphabetMap = () => {
  const map = new Map();
  [...alphabet].forEach((letter) => {
    if (Math.random() > 0.5) {
      map.set(letter, true);
    } else {
      map.set(letter, false);
    }
  });
  return map;
};
