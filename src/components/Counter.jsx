
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
//1. state manage- count=0
//2. action - increment , decrement, reset
//3. reducers - increment-> count => count + 1
//          -decrement-> count => count - 1
//          reset -> count => 0
//4. store
//5. providing store in react
//6. use store