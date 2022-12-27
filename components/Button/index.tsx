interface ButtonProps {
  children: React.ReactNode;
  outline?: Boolean;
}

export default function Button({ children, outline }: ButtonProps) {
  return (
    <button
      className={`${
        outline
          ? "border border-gray-600 px-4 py-2 w-100 block rounded-md text-left"
          : ""
      }`}
    >
      {children}
    </button>
  );
}
