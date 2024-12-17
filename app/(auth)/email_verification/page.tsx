'use client'

import { useState } from 'react'

import Header from '@/components/Header/Header'
import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal'

export default function EmailVerificationPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  return (
    <section className='w-screen min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <Header isSignedIn={false} />
      <h1 className='text-4xl font-semibold text-black text-center py-8'>
        メール確認
      </h1>

      <ErrorMessageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </section>
  )
}
