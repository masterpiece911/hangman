import classes from "./word.module.css";
import Letter from "./Letter";
import type { RevealedWord } from "./useGame";

type WordProps = {
  revealedWord: RevealedWord;
};

function Word({ revealedWord }: WordProps) {
  const wordItems = revealedWord.map((char, index) => {
    return <Letter key={`${char}${index}`} animate letter={char} />;
  });
  return <ul className={classes["letter-list"]}>{wordItems}</ul>;
}

export default Word;
