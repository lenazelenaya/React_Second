import { OutputMessageAction } from "../actions/OutputMessageActionTypes";

interface MessageState {
  isShownEditPage: boolean;
  currentMessageId: string;
}

interface MessageAction {
  type: OutputMessageAction;
  payload?: {
    idMessage?: string;
  };
}

const initialState: MessageState = {
  isShownEditPage: false,
  currentMessageId: "",
};

export default function (state = initialState, action: MessageAction) {
  switch (action.type) {
    case OutputMessageAction.HIDE_MODAL: {
      return { ...state, isShownEditPage: false };
    }
    case OutputMessageAction.SHOW_MODAL: {
      return { ...state, isShownEditPage: true };
    }
    case OutputMessageAction.SET_CURRENT_MESSAGE_ID: {
      const { idMessage } = action.payload!;
      return { ...state, currentMessageId: idMessage };
    }
    default:
      return state;
  }
}
