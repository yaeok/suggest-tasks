import { useState } from 'react'

import GenerateTaskItemDeleteModal from './GenerateTaskItemDeleteModal'

export default function GenerateTaskItemDeleteButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='text-blue-500 font-semibold'
        onClick={() => setIsOpen(true)}
      >
        削除
      </button>
      <GenerateTaskItemDeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
