'use client'

import { useState } from 'react'

import LogoutModal from './LogoutModal'

export default function LogoutButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='px-4 py-2 text-white font-semibold bg-rose-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-2 hover:duration-300 transition-all'
      >
        ログアウト
      </button>
      <LogoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
