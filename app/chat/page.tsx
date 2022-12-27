export default function ChatPage() {
  return (
    <>
      <main className='relative h-screen w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
        <div className='flex-1 overflow-hidden'>
          <div className='react-scroll-to-bottom--css-fmmpw-79elbk h-full'>
            <div className='react-scroll-to-bottom--css-fmmpw-1n7m0yu'>
              <div className='flex flex-col items-center text-sm h-full'>
                <div className='text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100'>
                  <h1 className='text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16'>
                    ChatGPT
                  </h1>
                  <div className='md:flex items-start text-center gap-3.5'>
                    <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                      <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                        <svg
                          stroke='currentColor'
                          fill='none'
                          stroke-width='1.5'
                          viewBox='0 0 24 24'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='h-6 w-6'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx='12' cy='12' r='5'></circle>
                          <line x1='12' y1='1' x2='12' y2='3'></line>
                          <line x1='12' y1='21' x2='12' y2='23'></line>
                          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                          <line
                            x1='18.36'
                            y1='18.36'
                            x2='19.78'
                            y2='19.78'
                          ></line>
                          <line x1='1' y1='12' x2='3' y2='12'></line>
                          <line x1='21' y1='12' x2='23' y2='12'></line>
                          <line
                            x1='4.22'
                            y1='19.78'
                            x2='5.64'
                            y2='18.36'
                          ></line>
                          <line
                            x1='18.36'
                            y1='5.64'
                            x2='19.78'
                            y2='4.22'
                          ></line>
                        </svg>
                        Examples
                      </h2>
                      <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                        <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                          &quot;Explain quantum computing in simple terms&quot;
                          →
                        </button>
                        <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                          &quot;Got any creative ideas for a 10 year old’s
                          birthday?&quot; →
                        </button>
                        <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                          &quot;How do I make an HTTP request in
                          Javascript?&quot; →
                        </button>
                      </ul>
                    </div>
                    <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                      <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                          className='h-6 w-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                          ></path>
                        </svg>
                        Capabilities
                      </h2>
                      <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                        <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
                          Remembers what user said earlier in the conversation
                        </li>
                        <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
                          Allows user to provide follow-up corrections
                        </li>
                        <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
                          Trained to decline inappropriate requests
                        </li>
                      </ul>
                    </div>
                    <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                      <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                        <svg
                          stroke='currentColor'
                          fill='none'
                          stroke-width='1.5'
                          viewBox='0 0 24 24'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          className='h-6 w-6'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
                          <line x1='12' y1='9' x2='12' y2='13'></line>
                          <line x1='12' y1='17' x2='12.01' y2='17'></line>
                        </svg>
                        Limitations
                      </h2>
                      <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                        <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
                          May occasionally generate incorrect information
                        </li>
                        <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
                          May occasionally produce harmful instructions or
                          biased content
                        </li>
                        <li className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md'>
                          Limited knowledge of world and events after 2021
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='w-full h-48 flex-shrink-0'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white md:!bg-transparent dark:md:bg-vert-dark-gradient'>
          <form className='stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6'>
            <div className='relative flex h-full flex-1 md:flex-col'>
              <div className='ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center'></div>
              <div className='flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'>
                <textarea
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
                <button className='absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
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
            ChatGPT Clone, gives the user more extensive control on which model
            they wanna use.
          </div>
        </div>
      </main>
    </>
  );
}
