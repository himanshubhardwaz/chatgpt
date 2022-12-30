"use client";

import { useContext, createContext, ReactNode } from "react";

interface SingleChatInterface {
  id: string;
  chat: Array<{ question?: string; answer?: string }>;
}

interface ChatInterface {
  chats: Array<SingleChatInterface>;
  currentActiveChat: string;
}

const initialValue = {
  chats: [],
  currentActiveChat: "",
};

const ChatCtx = createContext<ChatInterface>(initialValue);

export const useChatCtx = () => {
  return useContext<ChatInterface>(ChatCtx);
};

const ChatProvider = ({ children }: { children: ReactNode }) => {
  return <ChatCtx.Provider value={initialValue}>{children}</ChatCtx.Provider>;
};

export default ChatProvider;
