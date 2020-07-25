import rootReducer from "./reducers/index";
import { createStore } from 'redux';
import { Store } from "./types/store";

const initialState = {

};

const enh = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, initialState, enh);
