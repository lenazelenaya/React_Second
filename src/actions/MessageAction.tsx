import { OutputMessageAction } from "./MessageActionTypes";

export const hideModal = () => ({
  type: OutputMessageAction.HIDE_MODAL,
});

export const showModal = () => ({
  type: OutputMessageAction.SHOW_MODAL,
});

export const setEdited = () => ({
  type: OutputMessageAction.SET_EDITED,
});
export const setCurrentMessageId = (idMessage:string) => ({
  type: OutputMessageAction.SET_CURRENT_MESSAGE_ID,
  payload: {
    idMessage,
  },
})
