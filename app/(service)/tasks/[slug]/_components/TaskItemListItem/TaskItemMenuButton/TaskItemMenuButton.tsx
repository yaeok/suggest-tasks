'use client'

import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import TaskItemCompleteButton from './TaskItemComplete/TaskItemCompleteButton'
import TaskItemDeleteButton from './TaskItemDelete/TaskItemDeleteButton'
import TaskItemEditButton from './TaskItemEdit/TaskItemEditButton'
import TaskItemWorkButton from './TaskItemWork/TaskItemWorkButton'

export default function TaskItemMenuButton() {
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
            <div className='w-32 bg-white flex flex-col gap-2 p-4 border-2 border-gray-600 rounded-md shadow-lg items-center absolute z-30 top-8 -left-28'>
              <div>
                <TaskItemEditButton />
              </div>
              <div>
                <TaskItemDeleteButton />
              </div>
              <div>
                <TaskItemCompleteButton />
              </div>
              <div>
                <TaskItemWorkButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
