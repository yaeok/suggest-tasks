'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import GenerateTaskItemDeleteButton from './GenerateTaskItemDelete/GenerateTaskItemDeleteButton'
import GenerateTaskItemEditButton from './GenerateTaskItemEdit/GenerateTaskItemEditButton'

export default function GenerateTaskItemMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <RxHamburgerMenu />
      </button>
      <div className=''>
        {isOpen && (
          <div>
            <div
              className='w-full min-h-screen fixed top-0 left-0 z-20'
              onClick={() => setIsOpen(false)}
            ></div>
            <div className='w-20 bg-white flex flex-col gap-2 p-4 border-2 border-gray-600 rounded-md shadow-lg items-center absolute z-30 top-8 -left-16'>
              <GenerateTaskItemEditButton />
              <GenerateTaskItemDeleteButton />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
