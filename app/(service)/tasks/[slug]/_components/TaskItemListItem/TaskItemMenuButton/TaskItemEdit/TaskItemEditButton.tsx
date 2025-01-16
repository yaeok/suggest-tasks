import { useState } from 'react'

import TaskItemEditModal from './TaskItemEditModal'

export default function TaskItemEditButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='text-black font-semibold'
        onClick={() => setIsOpen(true)}
      >
        編集
      </button>
      <TaskItemEditModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
