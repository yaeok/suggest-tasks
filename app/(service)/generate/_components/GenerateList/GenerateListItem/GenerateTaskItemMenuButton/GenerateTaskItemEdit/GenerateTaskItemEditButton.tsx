import { useState } from 'react'

import GenerateTaskItemEditModal from './GenerateTaskItemEditModal'

export default function GenerateTaskItemEditButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='text-blue-500 font-semibold'
        onClick={() => setIsOpen(true)}
      >
        編集
      </button>
      <GenerateTaskItemEditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
