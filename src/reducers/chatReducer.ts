import { ChatAction } from "../actions/chatActionTypes";
import Message from "../types/message";

interface ChatState {
  isLoading: boolean;
  messages?: Message[];
  participants?: number;
  messagesNumber?: number;
  name: string;
}

interface ChatActions {
  type: ChatAction;
  payload?: {
    data?: any;
    idMessage?: string;
    messages?: Message[];
    participants?: number;
  };
}

const initialState: ChatState = {
  isLoading: true,
  messages: [],
  participants: 5,
  name: "Logo",
};

export default function (state = initialState, action: ChatActions) {
  switch (action.type) {
    case ChatAction.ADD_MESSAGE: {
      const { data } = action.payload!;
      const newMessage: Message = { ...data };
      const messages = [...state.messages!];
      messages.push(newMessage);
      return { ...state, messages };
    }
    case ChatAction.EDIT_MESSAGE: {
      const { idMessage, data } = action.payload!;
      const updatedMessages = state.messages!.map((message) => {
        if (message.id === idMessage) {
          return {
            ...message,
            ...data,
          };
        } else {
          return message;
        }
      });
      return { ...state, messages: updatedMessages };
    }
    case ChatAction.DELETE_MESSAGE: {
      const { idMessage } = action.payload!;
      const filteredMessages = state.messages!.filter(
        (message) => message.id !== idMessage
      );
      return { ...state, messages: filteredMessages };
    }
    case ChatAction.CHANGE_LIKE: {
      const { idMessage } = action.payload!;
      const messages = [...state.messages!];
      let message = messages.find((message) => message.id === idMessage);
      message!.likes = message!.likes ? 0 : 1;
      return { ...state, messages };
    }
    case ChatAction.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    case ChatAction.INIT_STORAGE: {
      const { messages, participants } = action.payload!;
      return {
        messages,
        participants,
        isLoading: true,
        name: "Logo",
      };
    }
    default:
      return state;
  }
}
