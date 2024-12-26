'use client'

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function TaskItemMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='relative'>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <RxHamburgerMenu />
        </button>
        <div className='absolute top-4 -left-16'>
          {isOpen && (
            <div>
              <div
                className='w-screen min-h-screen top-0 left-0'
                onClick={() => setIsOpen(false)}
              ></div>
              <div className='w-20 bg-white flex flex-col gap-2 p-4 border-2 border-gray-600 rounded-md shadow-lg items-center z-30'>
                <div>
                  <button>編集</button>
                </div>
                <div>
                  <button>削除</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
