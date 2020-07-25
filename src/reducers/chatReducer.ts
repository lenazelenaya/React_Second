import { ChatAction } from "../actions/chatActionTypes";
import Message from "../types/message";

interface ReducerState {
  isLoading: boolean;
  messages?: Message[];
  modalOn: boolean;
  participants?: number;
  messageCount?: number;
  name: string;
}

interface Action {
  type: ChatAction;
  payload?: {
    data?: any;
    id?: string;
    messages?: Message[];
    participants?: number;
  };
}

const initialState: ReducerState = {
  isLoading: true,
  modalOn: false,
  messages: [],
  participants: 1,
  name: "Logo",
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ChatAction.SET_STORAGE: {
      const { messages, participants } = action.payload!;
      return { ...state, messages, participants };
    }
    case ChatAction.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    case ChatAction.TOGGLE_MODAL: {
      return { ...state, modalOn: !state.modalOn };
    }

    case ChatAction.DELETE_MESSAGE: {
      const { id } = action.payload!;
      const messages = state.messages!.filter((message) => message.id !== id);
      return { ...state, messages };
    }
    case ChatAction.ADD_MESSAGE: {
      const messages = state.messages!;
      const { data } = action.payload!;
      const newMessage: Message = { ...data };
      messages.push(newMessage);
      return { ...state, messages };
    }
    case ChatAction.EDIT_MESSAGE: {
      const { id, data } = action.payload!;
      const messages = state.messages!.map((message) => {
        if (message.id !== id) {
          return {
            message,
          };
        } else {
          return {
            ...message,
            ...data,
          };
        }
      });
      return { ...state, messages };
    }
    default:
      return state;
  }
}
