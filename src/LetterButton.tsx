import clsx from "clsx";
import classes from "./letterButton.module.css";
import type { LetterState } from "./useGame";

type LetterButtonProps = {
  onClick: () => void;
  letter: string;
  letterState?: LetterState;
};

const LetterButton = ({
  letterState = "UNPLAYED",
  onClick,
  letter,
}: LetterButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    title="you can also type a letter on your keyboard"
    className={clsx(classes["letter-button"], {
      [classes["unclicked"]]: letterState === "UNPLAYED",
      [classes["clickedPresent"]]: letterState === "VALID",
      [classes["clickedAbsent"]]: letterState === "INVALID",
    })}
  >
    {letter}
  </button>
);

export default LetterButton;
