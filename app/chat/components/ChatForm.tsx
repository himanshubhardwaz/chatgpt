"use client";

import React, { FormEvent } from "react";

export default function ChatForm() {
  const [input, setInput] = React.useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  const getResponse = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: "text-davinci-003", prompt: input }),
    });

    const data = await response.json();
  };
  return (
    <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white md:!bg-transparent dark:md:bg-vert-dark-gradient'>
      <form
        onSubmit={getResponse}
        className='stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6'
      >
        <div className='relative flex h-full flex-1 md:flex-col'>
          <div className='ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center'></div>
          <div className='flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'>
            <textarea
              onChange={handleChange}
              value={input}
              data-id='root'
              rows={1}
              placeholder=''
              className='m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent'
              style={{
                maxHeight: "200px",
                height: "24px",
                overflowY: "hidden",
              }}
            />
            <button
              className='absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
              type='submit'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 20 20'
                className='h-4 w-4 rotate-90'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className='underline px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6'>
        ChatGPT Clone, gives the user more extensive control on which model they
        wanna use.
      </div>
    </div>
  );
}
