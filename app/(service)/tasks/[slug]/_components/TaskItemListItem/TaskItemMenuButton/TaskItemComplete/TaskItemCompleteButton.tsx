import { useState } from 'react'

import TaskItemCompleteModal from './TaskItemCompleteModal'

export default function TaskItemCompleteButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='px-4 py-2 bg-blue-500 rounded-md text-white font-semibold'
        onClick={() => setIsOpen(true)}
      >
        完了
      </button>
      <TaskItemCompleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
