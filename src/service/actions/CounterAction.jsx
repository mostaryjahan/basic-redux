import { DECREMENT, INCREMENT, RESET } from "../constant/CounterConstant"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}