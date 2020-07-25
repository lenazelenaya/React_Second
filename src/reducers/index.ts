import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import inputReducer from "./inputReducer";
import outputReducer from "./outputReducer";

const rootReducer = combineReducers({
  chatReducer,
  inputReducer,
  outputReducer,
});

export default rootReducer;
