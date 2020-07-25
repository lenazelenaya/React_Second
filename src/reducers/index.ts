import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import inputReducer from "./inputReducer";
import outputReducer from "./outputReducer";

export const rootReducer = () =>
  combineReducers({
    chatReducer,
    inputReducer,
    outputReducer,
  });
