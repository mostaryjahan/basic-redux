import { createStore } from "redux";
import CounterReducer from "./service/reducer/CounterReducer";
const Store = createStore(CounterReducer);

export default Store;