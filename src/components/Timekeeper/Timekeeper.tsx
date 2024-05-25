import { useState } from "react";
import { TimekeeperWrapper } from "./Timekeeper.styled";

interface TimekeeperProps {}

function Timekeeper(timekeeperProps: TimekeeperProps) {
  const [elapsedTime, setElapsedTime] = useState<String>("0");
  const [timeStarted, setTimeStarted] = useState<Boolean>(false);

  function startButton() {
    if (!timeStarted) {
      const startTime = new Date();
      setInterval(
        () =>
          setElapsedTime(
            ((new Date().valueOf() - startTime.valueOf()) / 1000).toPrecision(2)
          ),
        10
      );
      setTimeStarted(true);
    }
  }

  function pauseButton() {}

  return (
    <TimekeeperWrapper>
      <div>
        <button onClick={startButton}>Start game</button>
      </div>
      {elapsedTime}
      <div>
        <button onClick={pauseButton}>Pause game</button>
      </div>
    </TimekeeperWrapper>
  );
}

export default Timekeeper;
