import AppInfo from "./components/AppInfo";
import ChatForm from "./components/ChatForm";
import ChatProvider from "../../contexts/ChatContext";

export default function ChatPage() {
  return (
    <>
      <ChatProvider>
        <main className='relative w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
          <AppInfo />
          <ChatForm />
        </main>
      </ChatProvider>
    </>
  );
}
