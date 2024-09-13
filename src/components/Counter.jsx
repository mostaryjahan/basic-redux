
const Counter = () => {

    const handleIncrement = () => {
    }
    const handleDecrement = () => {
    }

    return (
        <div>
            <h3>Counter App</h3>
            <h4>Count: 0</h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;