'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal'
import { UserNotFoundException } from '@/infrastructure/exception/UserNotFoundException'
import { useAuthContext } from '@/provider/CurrentUserProvider'

type AccountEditFormType = {
  username: string
  email: string
}

export default function AccountPage() {
  const currentUser = useAuthContext()?.currentUser
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountEditFormType>({
    defaultValues: {
      username: currentUser?.username,
      email: currentUser?.email,
    },
  })

  useEffect(() => {
    try {
      if (!currentUser) {
        throw new UserNotFoundException()
      }
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        setIsOpen(true)
        setMessage(error.message)
      }
    }
  }, [currentUser])

  const onSubmit = handleSubmit((data: AccountEditFormType) => {
    const { username, email } = data
    console.log(username, email)
  })

  if (isEdit) {
    return (
      <section className='w-full flex flex-col gap-2 items-center'>
        <div className='w-full p-8 bg-white rounded-lg shadow-lg'>
          <form
            onSubmit={onSubmit}
            className='w-full flex flex-col items-center'
          >
            <div className='w-full items-start'>
              <h1 className='text-2xl font-semibold text-black'>
                ユーザー情報
              </h1>
              <div className='px-8 py-4 space-y-2'>
                <div className='space-y-2'>
                  <label className='font-semibold text-gray-500'>
                    ユーザー名
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
                </div>
                <div className='space-y-2'>
                  <label className='font-semibold text-gray-500'>
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
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEdit(false)}
              className='px-4 py-2 text-white font-semibold bg-blue-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
            >
              保存する
            </button>
          </form>
        </div>
      </section>
    )
  } else {
    return (
      <section className='w-full flex flex-col gap-2 items-center'>
        <div className='w-full p-8 bg-white rounded-lg shadow-lg flex flex-col items-center'>
          <div className='w-full items-start'>
            <h1 className='text-2xl font-semibold text-black'>ユーザー情報</h1>
            <div className='px-8 py-4 space-y-2'>
              <div className='space-y-2'>
                <label className='font-semibold text-gray-500'>
                  ユーザー名
                </label>
                <p className='text-lg pl-8'>{currentUser?.username}</p>
              </div>
              <div className='space-y-2'>
                <label className='font-semibold text-gray-500'>
                  メールアドレス
                </label>
                <p className='text-lg pl-8'>{currentUser?.email}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEdit(true)}
            className='px-4 py-2 text-white font-semibold bg-blue-500 rounded-full shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
          >
            編集する
          </button>
        </div>
        <ErrorMessageModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          message={message}
        />
      </section>
    )
  }
}
