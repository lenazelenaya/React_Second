import { MessageAction } from "./messageActionTypes";

export const setLike = (id: string) => ({
  type: MessageAction.SET_LIKE,
  payload: {
    id,
  },
});

export const hideModal = () => ({
  type: MessageAction.CLOSE_MODAL,
});

export const showModal = () => ({
  type: MessageAction.SHOW_MODAL,
});

export const setEdited = () => ({
  type: MessageAction.SET_EDITED,
});

export const setIdToMessage = (id: string) => ({
  type: MessageAction.SET_ID,
  payload: {
    id,
  },
});
