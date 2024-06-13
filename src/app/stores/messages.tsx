import { create } from "zustand";

type Message = {
  author: string;
  message: string;
};

type Store = {
  messages: Message[];
  addMessage: (message: Message) => void;
};

export const useMessages = create<Store>()((set) => ({
  messages: [],
  addMessage: (message) =>
    set(({ messages }) => ({ messages: [...messages, message] })),
}));
