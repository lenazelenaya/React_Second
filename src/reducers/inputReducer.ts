import { MessageAction } from "../actions/messageActionTypes";

interface MessageState {
  likes: number;
  currentMessageId: string;
}

interface Action {
  type: MessageAction;
  payload?: {
    id?: string;
  };
}

const initialState: MessageState = {
  likes: 0,
  currentMessageId: "",
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case MessageAction.SET_LIKE: {
      state.likes = state.likes ? 0 : 1;
      return { ...state };
    }
  }
}
