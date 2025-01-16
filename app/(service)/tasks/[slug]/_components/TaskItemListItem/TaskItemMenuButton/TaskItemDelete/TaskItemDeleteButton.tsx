import { useState } from 'react'

import TaskItemDeleteModal from './TaskItemDeleteModal'

export default function TaskItemDeleteButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='text-black font-semibold'
        onClick={() => setIsOpen(true)}
      >
        削除
      </button>
      <TaskItemDeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
