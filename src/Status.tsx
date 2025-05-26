import classes from "./status.module.css";
import type { Play } from "./useGame";

type StatusProps = {
  tries: number;
  playState: Play;
};

const Status = ({ tries, playState }: StatusProps) => (
  <div className={classes["status"]}>
    {playState === "LOSE" && "game over. you lose."}
    {playState === "WIN" && "you win!"}
    {playState === "START" && `${tries} attempts remaining.`}
    {playState === "PLAYING" && tries === 1 && `${tries} attempt remaining.`}
    {playState === "PLAYING" && tries > 1 && `${tries} attempts remaining.`}
  </div>
);

export default Status;
