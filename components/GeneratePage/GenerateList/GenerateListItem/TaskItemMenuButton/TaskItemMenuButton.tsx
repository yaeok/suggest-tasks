'use client'

import { useState } from 'react'

export default function TaskItemMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  // return (
  //   <div className='relative'>
  //     <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
  //       <RxHamburgerMenu />
  //     </button>
  //     <div className='absolute top-0 left-16'>
  //       {isOpen && (
  //         <div>
  //           <div
  //             className='w-screen min-h-screen top-0 left-0'
  //             onClick={() => setIsOpen(false)}
  //           ></div>
  //           <div className='w-20 bg-white flex flex-col gap-2 p-4 border-2 border-gray-600 rounded-md shadow-lg items-center z-30'>
  //             <div>
  //               <button>編集</button>
  //             </div>
  //             <div>
  //               <button>削除</button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )

  return (
    <div>
      <button
        data-popover-target='popover-description'
        type='button'
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className='text-white bg-blue-700 hover:bg-blue-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <svg
          className='w-4 h-4 me-2'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z'></path>
          <path d='M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z'></path>
          <path d='M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z'></path>
        </svg>
        Storage status
      </button>

      {isOpen && (
        <div
          data-popover
          id='popover-description'
          role='tooltip'
          className='absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400'
        >
          <div className='p-3 space-y-2'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>
              Available storage
            </h3>
            <p>
              This server has
              <span className='font-semibold text-gray-900 dark:text-white'>
                30
              </span>
              of
              <span className='font-semibold text-gray-900 dark:text-white'>
                150 GB
              </span>
              of block storage remaining.
            </p>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
              <div className='bg-red-600 h-2.5 rounded-full w-[85%]'></div>
            </div>
            <a
              href='#'
              className='flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700'
            >
              Upgrade now
              <svg
                className='w-2 h-2 ms-1.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </a>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </div>
  )
}
