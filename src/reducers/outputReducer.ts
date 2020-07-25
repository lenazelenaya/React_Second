import { MessageAction } from "../actions/messageActionTypes";

interface MessageState {
  isShown: boolean;
  id: string;
}

interface Action {
  type: MessageAction;
  payload?: {
    id?: string;
  };
}

const initialState: MessageState = {
  isShown: false,
  id: "",
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case MessageAction.CLOSE_MODAL: {
      return { ...state, isShown: false };
    }
    case MessageAction.SHOW_MODAL: {
      return { ...state, isShown: true };
    }
    case MessageAction.SET_ID: {
      const { id } = action.payload!;
      return { ...state, id: id };
    }
  }
}
