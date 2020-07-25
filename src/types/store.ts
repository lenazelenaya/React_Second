import Message from "./message";

export interface Store {
    isLoading: boolean;
    modalOn: boolean;
    messages?: Message[];
    participants?: number;
    name: string;
    currentMessage: Message;
}
