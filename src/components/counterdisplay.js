import React from 'react';
import {useResettableCounter} from '../containers/counters';


export function CounterDisplay() {
  // let counter = useContext(Counter);
  let counter = useResettableCounter();
  // let counter = ResettableCounter.useContainer();
  return (
    <div>
      <button onClick={counter.increment}>+</button>
      <p>CounterDisplay: {counter.count} times</p>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  )
};
