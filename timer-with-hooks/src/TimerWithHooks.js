/*
    implement timer with hooks in ReactJS
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { useState, useCallback } from 'react';

let interval = null;
function TimerWithHooks() {
  let [value, setValue] = useState(0);
  let [started, setStarted] = useState(false);
  let handleStart = useCallback(() => {
    if (!interval) {
      setStarted(true);
      interval = setInterval(() => {
        setValue(prevValue => prevValue + 1);
      }, 1000);
    }
  }, [interval]);
  let handlePause = useCallback(() => {
    if (interval) {
      setStarted(false);
      clearInterval(interval);
      interval = null;
    }
  }, [interval]);
  let handleReset = useCallback(() => {
    handlePause();
    setValue(0);
  }, []);
  let handleToggle = useCallback(() => {
    if (started) handlePause();
    else handleStart();
  }, [started]);

  return (
    <>
      <h2>Timer</h2>
      <p>{value}</p>
      <button onClick={handleToggle}>{started ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default TimerWithHooks;

/*
    implement a timer with hooks
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
