import { MessageAction } from "../actions/messageActionTypes";

interface MessageState {
  id: string;
}

interface Action {
  type: MessageAction;
  payload?: {
    id?: string;
  };
}

const initialState: MessageState = {
  id: "",
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case MessageAction.SET_EDITED: {
      const { id } = action.payload!;
      return { ...state, id };
    }
    default:
      return state;
  }
}
