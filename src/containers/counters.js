import { useState } from "react";
import {createContainer} from "unstated-next";

function useCounter() {
    let [count, setCount] = useState(0)
    let decrement = () => setCount(count - 1)
    let increment = () => setCount(count + 1)
    return { count, decrement, increment, setCount }
  };

export function useResettableCounter() {
  let counter = Counter.useContainer();
  let reset = () => counter.setCount(0);
  return {...counter, reset};
};

export const Counter = createContainer(useCounter);
// export const ResettableCounter = createContainer(useResettableCounter);