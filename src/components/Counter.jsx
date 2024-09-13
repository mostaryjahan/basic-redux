import { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count)=> count + 1);
    }
    const handleDecrement = () => {
        setCount((count)=> count - 1);
    }
    return (
        <div>
            <h3>Counter App</h3>
            <h4>Count: {count}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;