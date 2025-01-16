import { useState } from 'react'

import TaskItemCompleteModal from './TaskItemCompleteModal'

export default function TaskItemCompleteButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='text-black font-semibold'
        onClick={() => setIsOpen(true)}
      >
        完了
      </button>
      <TaskItemCompleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
