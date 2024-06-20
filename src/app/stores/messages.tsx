import { create } from "zustand";

type Message = {
  author: string;
  message: string;
};

type Messages = Record<string, Message[]>;

type Store = {
  messages: Messages;
  addMessage: (key: string, message: Message) => void;
};

export const useMessages = create<Store>()((set) => ({
  messages: {
    root: [],
  },
  addMessage: (key, newMessage) => {
    set(({ messages }) => {
      return {
        messages: {
          ...messages,
          [key]: [...(messages[key] || []), newMessage],
        },
      };
    });
  },
}));
