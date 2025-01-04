import { useState } from 'react'
import TaskItemEditModal from './TaskItemEditModal'

export default function TaskItemEditButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='px-4 py-2 bg-blue-300 rounded-md text-white font-semibold'
        onClick={() => setIsOpen(true)}
      >
        編集
      </button>
      <TaskItemEditModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
