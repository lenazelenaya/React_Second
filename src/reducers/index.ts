import { combineReducers } from "redux";
import chat from "./chatReducer"
import outputMessage from "./outgoingMessageReducer"

const rootReducer = combineReducers({
    chat,
    outputMessage
});

export default rootReducer;
