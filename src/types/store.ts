import Message from "./message";

export interface Store {
  chat: {
    isLoading: boolean;
    modalOn: boolean;
    messages?: Message[];
    participants?: number;
    name: string;
  };
  message: {
    currentMessage: Message;
  };
}
