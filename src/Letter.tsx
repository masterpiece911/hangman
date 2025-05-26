import classes from "./letter.module.css";

type LetterProps = {
  letter: string | null;
};

const Letter = ({ letter }: LetterProps) => (
  <span className={classes["letter"]}>{letter ?? "_"}</span>
);

export default Letter;
