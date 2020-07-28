import { ChatAction } from "./chatActionTypes";
import Message from "../types/message";

export const initStorage = (messages: Message[], participants:number) => ({
  type: ChatAction.INIT_STORAGE,
  payload: {
    messages,
    participants,
  },
});

export const addMessage = (data: Message) => ({
  type: ChatAction.ADD_MESSAGE,
  payload: {
    data,
  },
});

export const editMessage = (idMessage: string, data: Message) => ({
  type: ChatAction.EDIT_MESSAGE,
  payload: {
    idMessage,
    data,
  },
});

export const deleteMessage = (idMessage: string) => ({
  type: ChatAction.DELETE_MESSAGE,
  payload: {
    idMessage,
  },
});

export const changeLike = (idMessage: string) => ({
  type: ChatAction.CHANGE_LIKE,
  payload: {
    idMessage,
  },
});

export const hideLoading = () => ({
  type: ChatAction.HIDE_LOADING,
});
