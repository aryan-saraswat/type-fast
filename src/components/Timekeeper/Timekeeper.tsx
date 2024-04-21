import React, { FC, useState } from "react";
import { TimekeeperWrapper } from "./Timekeeper.styled";

interface TimekeeperProps {}
const startTime = new Date();

function Timekeeper(timekeeperProps: TimekeeperProps) {
  const [elapsedTime, setElapsedTime] = useState<number>(
    (new Date().valueOf() - startTime.valueOf()) / 1000
  );

  function handleButton() {
    setElapsedTime((new Date().valueOf() - startTime.valueOf()) / 1000);
  }

  return (
    <TimekeeperWrapper>
      <button onClick={handleButton}>Current time</button>
      {elapsedTime}
    </TimekeeperWrapper>
  );
}

export default Timekeeper;
