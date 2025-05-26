import classes from "./word.module.css";
import letterClasses from "./letter.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Letter from "./Letter";
import { useRef } from "react";
import type { Play, RevealedWord } from "./useGame";

type WordProps = {
  revealedWord: RevealedWord;
  playState: Play;
};

function letterToKey(char: string | null, index: number) {
  return `${char ?? "unrevealed"}_${index}`;
}

function Word({ revealedWord, playState }: WordProps) {
  const refs = useRef<Map<string, HTMLElement | undefined | null>>(null);

  const getRefs = () => {
    if (!refs.current) {
      refs.current = new Map();
    }

    return refs.current;
  };

  const wordItems = revealedWord.map((char, index) => {
    return (
      <TransitionGroup
        className={classes["letters"]}
        timeout={300}
        component="li"
        key={letterToKey(char, index)}
      >
        <CSSTransition
          nodeRef={(ref) => {
            const refsMap = getRefs();
            refsMap.set(letterToKey(char, index), ref);

            return () => {
              refsMap.delete(letterToKey(char, index));
            };
          }}
          key={letterToKey(char, index)}
          enter={playState !== "START"}
          exit={playState !== "START"}
          classNames={{
            enter: letterClasses["letterTransitionEnter"],
            enterActive: letterClasses["letterTransitionEnterActive"],
            exit: letterClasses["letterTransitionExit"],
            exitActive: letterClasses["letterTransitionExitActive"],
          }}
          timeout={300}
        >
          <Letter letter={char} />
        </CSSTransition>
      </TransitionGroup>
    );
  });

  return <ul className={classes["letter-list"]}>{wordItems}</ul>;
}

export default Word;
