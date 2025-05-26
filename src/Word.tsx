import classes from "./word.module.css";
import Letter from "./Letter";
import type { Play, RevealedWord } from "./useGame";

type WordProps = {
  revealedWord: RevealedWord;
  playState: Play;
};

function Word({ revealedWord }: WordProps) {
  const wordItems = revealedWord.map((char, index) => {
    return <Letter key={`${char}${index}`} animate letter={char} />;
  });
  return <ul className={classes["letter-list"]}>{wordItems}</ul>;
}

export default Word;
