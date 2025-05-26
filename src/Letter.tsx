import { useRef } from "react";
import classes from "./letter.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

type LetterProps = {
  animate: boolean;
  letter: string | null;
};

const Letter = ({ letter, animate = false }: LetterProps) => {
  const letterRef = useRef<HTMLSpanElement>(null);

  // Create a unique key that changes when letter transitions from null to string
  const transitionKey = letter === null ? "hidden" : `revealed-${letter}`;

  return (
    <TransitionGroup className={classes["letter-container"]} component="li">
      <CSSTransition
        key={transitionKey}
        nodeRef={letterRef}
        timeout={300}
        enter={animate}
        exit={animate}
        appear={animate}
        classNames={{
          appear: classes["letter-transition-enter"],
          appearActive: classes["letter-transition-enter-active"],
          enter: classes["letter-transition-enter"],
          enterActive: classes["letter-transition-enter-active"],
          exit: classes["letter-transition-exit"],
          exitActive: classes["letter-transition-exit-active"],
        }}
      >
        <span ref={letterRef} className={classes["letter"]}>
          {letter?.toUpperCase() ?? "_"}
        </span>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Letter;
