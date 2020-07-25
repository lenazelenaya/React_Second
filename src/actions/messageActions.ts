import { MessageAction } from "./messageActionTypes";
import Message from '../types/message'

export const setLike = (id: string) => ({
  type: MessageAction.SET_LIKE,
  payload: {
    id,
  },
});

export const setEdited = (message: Message) => ({
  type: MessageAction.SET_EDITED,
  payload: {
    message,
  },
});