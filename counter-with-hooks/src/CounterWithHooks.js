/*
    implement a counter with hooks
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

import React, { useState, useCallback } from 'react';

function CounterWithHooks(props) {
  let [value, setValue] = useState(0);
  let handleIncrement = useCallback(() => setValue(value + 1), [value]);
  let handleDecrement = useCallback(() => setValue(value - 1), [value]);

  if (value < props.min) setValue(props.min);
  else if (value > props.max) setValue(props.max);

  return (
    <>
      <h3>Counter</h3>
      <p>{value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default CounterWithHooks;

/*
    implement a counter with hooks
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
