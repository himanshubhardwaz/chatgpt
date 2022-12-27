import Button from "../../../components/Button";

export default function Sidebar() {
  return (
    <aside className='bg-sidebar w-64 h-screen text-white flex flex-col px-2 py-2'>
      <Button outline>+ New Chat</Button>
    </aside>
  );
}
