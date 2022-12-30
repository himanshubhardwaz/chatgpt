"use client";

import { useContext, createContext, ReactNode, useReducer } from "react";

interface SingleChatInterface {
  id: string;
  chat: Array<{ question?: string; answer?: string }>;
}

interface ChatInterface {
  chats: Array<SingleChatInterface>;
  currentActiveChat: string;
}

interface ChatStateAndMethods extends ChatInterface {
  getCurrentActiveChat: () => SingleChatInterface | null;
}

enum ChatActionType {
  UPDATE_CURRENT_CHAT = "UPDATE_CURRENT_CHAT",
  DELETE_CURRENT_CHAT = "DELETE_CURRENT_CHAT",
  CREATE_NEW_CHAT = "CREATE_NEW_CHAT",
  DELETE_ALL_CHAT = "DELETE_ALL_CHAT",
}

type ChatAction =
  | { type: ChatActionType.CREATE_NEW_CHAT }
  | { type: ChatActionType.UPDATE_CURRENT_CHAT; payload: SingleChatInterface }
  | { type: ChatActionType.DELETE_CURRENT_CHAT; payload: SingleChatInterface }
  | { type: ChatActionType.DELETE_ALL_CHAT };

const ChatCtx = createContext<ChatStateAndMethods>(null!);

export const useChatCtx = () => {
  return useContext<ChatStateAndMethods>(ChatCtx);
};

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const getCurrentActiveChat = () => {
    if (state.currentActiveChat) {
      const foundChat = state.chats.find(
        (chat) => chat.id === state.currentActiveChat
      );

      if (foundChat) return foundChat;
    }
    return null;
  };

  const initialValue = {
    chats: [],
    currentActiveChat: "",
  };

  const reducer = (state: ChatInterface, action: ChatAction): ChatInterface => {
    switch (action.type) {
      case ChatActionType.CREATE_NEW_CHAT:
        return {
          ...state,
          chats: [...state.chats, { id: self.crypto.randomUUID(), chat: [] }],
        };
      case ChatActionType.UPDATE_CURRENT_CHAT: {
        return {
          ...state,
          chats: state.chats.map((chat) => {
            if (chat.id === action.payload.id) {
              return action.payload;
            }
            return chat;
          }),
        };
      }
      case ChatActionType.DELETE_CURRENT_CHAT: {
        const updatedChats: SingleChatInterface[] = [];

        state.chats.forEach((chat) => {
          if (chat.id !== action.payload.id) {
            updatedChats.push(chat);
          }
        });

        return {
          ...state,
          chats: updatedChats,
        };
      }
      case ChatActionType.DELETE_ALL_CHAT: {
        return initialValue;
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ChatCtx.Provider value={{ ...state, getCurrentActiveChat }}>
      {children}
    </ChatCtx.Provider>
  );
};

export default ChatProvider;
