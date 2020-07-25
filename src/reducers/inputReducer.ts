import { MessageAction } from "../actions/messageActionTypes";

interface MessageState {
  likes: number;
}

interface Action {
  type: MessageAction;
}

const initialState: MessageState = {
  likes: 0,
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case MessageAction.SET_LIKE: {
      state.likes = state.likes ? 0 : 1;
      return { ...state };
    }
    default:
      return state;
  }
}
