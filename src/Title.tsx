import classes from "./title.module.css";

import HangmanStart from "./svg/hangman.svg?react";
import HangmanWin from "./svg/hangmanWon.svg?react";
import Hangman0 from "./svg/hangman0.svg?react";
import Hangman1 from "./svg/hangman1.svg?react";
import Hangman2 from "./svg/hangman2.svg?react";
import Hangman3 from "./svg/hangman3.svg?react";
import Hangman4 from "./svg/hangman4.svg?react";
import Hangman5 from "./svg/hangman5.svg?react";
import Hangman6 from "./svg/hangman6.svg?react";
import Hangman7 from "./svg/hangman7.svg?react";
import HangmanDead from "./svg/hangmanDead.svg?react";

import type { Play } from "./useGame";

type TitleProps = {
  tries: number;
  playState: Play;
};

function Hangman({ tries, playState }: TitleProps) {
  if (playState === "LOSE") {
    return <HangmanDead />;
  }
  if (playState === "WIN") {
    return <HangmanWin />;
  }
  if (tries === 8 && playState === "START") {
    return <HangmanStart />;
  }
  if (tries === 8) {
    return <Hangman0 />;
  }
  if (tries === 7) {
    return <Hangman1 />;
  }
  if (tries === 6) {
    return <Hangman2 />;
  }
  if (tries === 5) {
    return <Hangman3 />;
  }
  if (tries === 4) {
    return <Hangman4 />;
  }
  if (tries === 3) {
    return <Hangman5 />;
  }
  if (tries === 2) {
    return <Hangman6 />;
  }
  return <Hangman7 />;
}

const Title = (props: TitleProps) => {
  const titleA = "==> hangman";
  const titleB = "<==";

  return (
    <div className={classes["title"]}>
      {titleA}
      <Hangman {...props} />
      {titleB}
    </div>
  );
};

export default Title;
