'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Header from '@/components/Header/Header'
import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal'
import { RoutePath } from '@/constants/RoutePath'
import { FirebaseAuthException } from '@/infrastructure/exception/FirebaseAuthException'
import { SignUpUseCase } from '@/usercase/sign_up_use_case/sign_up_use_case'

type SignUpFormType = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignUpPage() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const password = watch('password')

  const onSubmit = handleSubmit(async (data: SignUpFormType) => {
    try {
      const { username, email, password } = data
      const usecase = new SignUpUseCase()
      await usecase.signUp(email, password, username)

      // ログイン後の処理
      router.push(RoutePath.GENERATE)
    } catch (error) {
      if (error instanceof FirebaseAuthException) {
        setIsOpen(true)
        setMessage(error.message)
      }
    }
  })
  return (
    <section className='w-screen min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <Header isSignedIn={false} />
      <h1 className='text-4xl font-semibold text-black text-center py-8'>
        新規登録
      </h1>
      <form onSubmit={onSubmit} className='w-full'>
        <section className='w-full flex flex-col items-center justify-center gap-4'>
          <section className='w-full lg:w-1/3 px-4 lg:px-0 flex flex-col gap-2 items-start'>
            <label htmlFor='' className='text-sm'>
              ユーザ名
            </label>
            <input
              type='text'
              placeholder='ユーザー名'
              className='w-full p-2 border border-gray-300 rounded-md'
              {...register('username', {
                required: {
                  value: true,
                  message: '必須入力です',
                },
                maxLength: {
                  value: 20,
                  message: '20文字以内で入力してください',
                },
              })}
            />
            {errors.username && (
              <span className='text-red-500 text-xs px-4'>
                {errors.username.message}
              </span>
            )}
          </section>
          <section className='w-full lg:w-1/3 px-4 lg:px-0 flex flex-col gap-2 items-start'>
            <label htmlFor='' className='text-sm'>
              メールアドレス
            </label>
            <input
              type='email'
              placeholder='メールアドレス'
              className='w-full p-2 border border-gray-300 rounded-md'
              {...register('email', {
                required: {
                  value: true,
                  message: '必須入力です',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'メールアドレスの形式で入力してください',
                },
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-xs px-4'>
                {errors.email.message}
              </span>
            )}
          </section>
          <section className='w-full lg:w-1/3 px-4 lg:px-0 flex flex-col gap-2 items-start'>
            <label htmlFor='' className='text-sm'>
              パスワード
            </label>
            <input
              type='password'
              placeholder='パスワード'
              className='w-full p-2 border border-gray-300 rounded-md'
              {...register('password', {
                required: {
                  value: true,
                  message: '必須入力です',
                },
                minLength: {
                  value: 8,
                  message: '8文字以上で入力してください',
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
                  message: '英数字をそれぞれ1文字以上で入力してください',
                },
              })}
            />
            {errors.password && (
              <span className='text-red-500 text-xs px-4'>
                {errors.password.message}
              </span>
            )}
          </section>
          <section className='w-full lg:w-1/3 px-4 lg:px-0 flex flex-col gap-2 items-start'>
            <label htmlFor='' className='text-sm'>
              パスワード（確認）
            </label>
            <input
              type='password'
              placeholder='パスワード（確認）'
              className='w-full p-2 border border-gray-300 rounded-md'
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: '必須入力です',
                },
                validate: (value) =>
                  value === password || 'パスワードが一致しません',
              })}
            />
            {errors.confirmPassword && (
              <span className='text-red-500 text-xs px-4'>
                {errors.confirmPassword.message}
              </span>
            )}
          </section>
          <button
            type='submit'
            className='w-1/3 py-2 rounded-full bg-blue-500 text-white font-semibold'
          >
            新規登録
          </button>
        </section>
      </form>
      <ErrorMessageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </section>
  )
}
