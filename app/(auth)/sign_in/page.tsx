'use client'

import { useForm } from 'react-hook-form'

import Header from '@/components/Header/Header'

type SignInFormType = {
  email: string
  password: string
}

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  return (
    <section className='w-screen min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <Header isSignedIn={true} />
      <h1 className='text-4xl font-semibold text-black text-center py-8'>
        新規登録
      </h1>
      <form className='w-full flex flex-col items-center gap-4'>
        <input
          type='email'
          placeholder='メールアドレス'
          className='w-1/2 p-2 border border-gray-300 rounded-md'
          {...register('email', { required: true })}
        />
        <input
          type='password'
          placeholder='パスワード'
          className='w-1/2 p-2 border border-gray-300 rounded-md'
          {...register('password', { required: true })}
        />
        <button
          type='submit'
          className='w-1/2 p-2 bg-blue-500 text-white rounded-md'
        >
          登録
        </button>
      </form>
    </section>
  )
}
