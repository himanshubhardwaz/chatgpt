import Sidebar from "./components/Sidebar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='flex min-h-screen'>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
