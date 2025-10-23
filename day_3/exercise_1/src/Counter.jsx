import { useState } from "react";
import "./Counter.css"

function Counter()  {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Simple Counter</h2>
            <p>Count: {count}</p>

            <button onClick={ () => setCount(count + 1)}>+1</button>
            <button onClick={ () => setCount(count - 1)}>-1</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;