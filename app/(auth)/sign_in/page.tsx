'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Header from '@/components/Header/Header'
import FullScreenLoading from '@/components/Loading/FullScreenLoading'
import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal'
import { RoutePath } from '@/constants/RoutePath'
import { FirebaseAuthException } from '@/infrastructure/exception/FirebaseAuthException'
import { SignInUseCase } from '@/usercase/sign_in_use_case/sign_in_use_case'

type SignInFormType = {
  email: string
  password: string
}

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
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

  // ログインボタン押下
  const onSubmit = handleSubmit(async (data: SignInFormType) => {
    // ローディング開始
    setLoading(true)

    // 引数取得
    const { email, password } = data

    // ログイン処理実行
    try {
      // インスタンス生成
      const usecase = new SignInUseCase()
      // ログイン処理実行
      await usecase.execute({ email, password })
      // ログイン後の処理
      router.push(RoutePath.GENERATE)
    } catch (error) {
      if (error instanceof FirebaseAuthException) {
        // FirebaseAuthエラーの場合
        setMessage(error.message)
        setIsOpen(true)
      } else {
        // その他のエラーの場合
        setMessage('エラーが発生しました。開発者へ連絡してください。')
        setIsOpen(true)
      }
    } finally {
      setTimeout(() => {
        // ローディング終了
        setLoading(false)
      }, 2000)
    }
  })

  if (loading) {
    return <FullScreenLoading message='ログイン中...' />
  }

  return (
    <section className='w-full min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <Header isSignedIn={true} />
      <div className='w-full md:w-2/3 lg:w-1/3 py-8 m-16 flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-semibold text-black text-center py-4'>
          ログイン
        </h1>
        <form onSubmit={onSubmit} className='w-full px-4'>
          <section className='w-full flex flex-col items-center justify-center gap-12'>
            <div className='w-full flex flex-col gap-4'>
              <section className='w-full px-4 lg:px-0 flex flex-col gap-1 items-start'>
                <label htmlFor='email' className='text-sm'>
                  メールアドレス <span className='text-red-500'>*</span>
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
                  <span className='text-red-500 text-xs pl-2 font-semibold'>
                    {errors.email.message}
                  </span>
                )}
              </section>
              <section className='w-full px-4 lg:px-0 flex flex-col gap-1 items-start'>
                <label htmlFor='password' className='text-sm'>
                  パスワード <span className='text-red-500'>*</span>
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
                  <span className='text-red-500 text-xs pl-2 font-semibold'>
                    {errors.password.message}
                  </span>
                )}
              </section>
            </div>
            <div className='w-full px-4 lg:px-0'>
              <button
                type='submit'
                className='w-full py-2 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
              >
                ログイン
              </button>
            </div>
          </section>
        </form>
      </div>
      <ErrorMessageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </section>
  )
}
