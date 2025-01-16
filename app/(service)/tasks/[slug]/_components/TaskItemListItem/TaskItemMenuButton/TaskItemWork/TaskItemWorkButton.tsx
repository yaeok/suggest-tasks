import { useState } from 'react'

import TaskItemWorkModal from './TaskItemWorkModal'

export default function TaskItemWorkButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='text-blue-500 font-semibold'
        onClick={() => setIsOpen(true)}
      >
        開始
      </button>
      <TaskItemWorkModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
