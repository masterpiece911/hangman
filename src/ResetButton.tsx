import classes from "./resetButton.module.css";

type ResetButtonProps = {
  onClick: () => void;
};

const ResetButton = ({ onClick }: ResetButtonProps) => (
  <div className={classes["reset-button-container"]}>
    <button
      className={classes["reset-button"]}
      title="you can also press enter key to restart"
      onClick={onClick}
      type="button"
    >
      NEW GAME
    </button>
  </div>
);

export default ResetButton;
