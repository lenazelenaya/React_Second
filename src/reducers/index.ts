import { combineReducers } from "redux";
import chat from "./chatReducer"
import message from "./messageReducer"

const rootReducer = combineReducers({
    chat,
    message
});

export default rootReducer;
