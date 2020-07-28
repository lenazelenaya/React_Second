import reducer from "./reducers/index";
import { createStore } from 'redux';

//@ts-ignore
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
