import { ChatAction } from "../actions/chatActionTypes";
import Message from "../types/message";
import cs from "../services/chatService"

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
  participants: 0,
  name: "",
};

export default function (state = initialState, action: ChatActions) {
  switch (action.type) {
    case ChatAction.INIT_STORAGE: {
      const { messages, participants } = action.payload!;
      return {
        messages,
        participants,
        isLoading: true,
        name: "Logo",
      };
    }
    case ChatAction.ADD_MESSAGE: {
      const { data } = action.payload!;
      const newMessage: Message = { ...data };
      const messages = [...state.messages!];
      messages.push(newMessage);
      let participants = cs.getParticipantsCount(messages);
      return { ...state, messages, participants };
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
      const participants = cs.getParticipantsCount(filteredMessages);
      return { ...state, messages: filteredMessages, participants };
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
    default:
      return state;
  }
}
