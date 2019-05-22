import React, { useState, useEffect } from "react";
import { useResettableCounter } from '../containers/counters';

export function Example() {
    // let counter = useContext(Counter);
    let counter = useResettableCounter();
    // let counter = ResettableCounter.useContainer();
    const [countTimesTen, setCountTimesTen] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${counter.count} times`;
        setCountTimesTen(counter.count * 10);
    });

    return (
        <div>
            <p>Example: {counter.count} times</p>
            <p>{counter.count} * 10 = {countTimesTen}</p>
            <button onClick={counter.decrement}>Decrement</button>
            <button onClick={counter.increment}>Increment</button>
            <button onClick={counter.reset}>Reset</button>
        </div>
    );
}
