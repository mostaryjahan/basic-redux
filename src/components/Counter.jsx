import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, reset } from "../service/actions/counterAction";

const Counter = () => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch()

    const handleIncrement = () => {
       dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())

    }
    const handleReset = () => {
        dispatch(reset())

    }

    return (
        <div>
            <h2>Redux-toolkit</h2>
            <h3>Counter App</h3>
            <h4>Count: {count}</h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
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