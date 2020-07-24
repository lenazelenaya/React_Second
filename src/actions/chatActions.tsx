import { ChatAction } from "./chatActionTypes";
import Message from "../types/message";

export const setStorageProps = (messages: Message[], participants: number) => ({
  type: ChatAction.SET_STORAGE,
  payload: {
    messages,
    participants,
  },
});

export const hideLoading = () => ({
  type: ChatAction.HIDE_LOADING,
});

export const addMessage = (message: Message) => ({
  type: ChatAction.ADD_MESSAGE,
  payload: {
    message,
  },
});

export const editMessage = (id: string, message: Message) => ({
  type: ChatAction.EDIT_MESSAGE,
  payload: {
    id,
    message,
  },
});

export const deleteMessage = (id: string) => ({
  type: ChatAction.DELETE_MESSAGE,
  payload: {
    id,
  },
});

