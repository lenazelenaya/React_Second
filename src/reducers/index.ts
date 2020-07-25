import { combineReducers } from "redux";
import chat from "./chatReducer";
import input from "./inputReducer";
import output from "./outputReducer";

const rootReducer = combineReducers({
  chat,
  input,
  output,
});

export default rootReducer;
