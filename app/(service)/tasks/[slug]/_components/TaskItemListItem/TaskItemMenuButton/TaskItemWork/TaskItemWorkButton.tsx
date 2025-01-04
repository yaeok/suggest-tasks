import { useState } from 'react'
import TaskItemWorkModal from './TaskItemWorkModal'

export default function TaskItemWorkButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='px-4 py-2 bg-blue-300 rounded-md text-white font-semibold'
        onClick={() => setIsOpen(true)}
      >
        開始
      </button>
      <TaskItemWorkModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
