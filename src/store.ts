import rootReducer from "./reducers/index";
import { createStore, compose } from 'redux';

const initialState = {
};

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
  }

const enh = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, initialState, enh);
