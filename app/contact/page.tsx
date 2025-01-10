'use client'

import { useForm } from 'react-hook-form'

import Header from '@/components/Header/Header'
import { ContactType } from '@/constants/ContactType'

type ContactFormType = {
  type: string
  email: string
  content: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    defaultValues: {
      type: ContactType[0],
      email: '',
      content: '',
    },
  })

  // 新規登録ボタン押下
  const onSubmit = handleSubmit(async (data: ContactFormType) => {
    // 引数の取得
    const { type, email, content } = data

    // 送信処理
  })

  return (
    <section className='w-full min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <Header isSignedIn={true} />
      <div className='w-full md:w-2/3 lg:w-1/3 py-8 m-16 flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-semibold text-black text-center py-4'>
          お問い合わせ
        </h1>
        <form onSubmit={onSubmit} className='w-full px-4'>
          <section className='w-full flex flex-col items-center justify-center gap-8'>
            <div className='w-full flex flex-col gap-4'>
              <section className='w-full px-4 lg:px-0 flex flex-col gap-1 items-start'>
                <label htmlFor='type' className='text-sm'>
                  お問い合わせ種類 <span className='text-red-500'>*</span>
                </label>
                <select
                  {...register('type', {
                    required: {
                      value: true,
                      message: '必須入力です',
                    },
                  })}
                  className='w-full p-2 border border-gray-300 rounded-md'
                >
                  {ContactType.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.type && (
                  <span className='text-red-500 text-xs pl-2 font-semibold'>
                    {errors.type.message}
                  </span>
                )}
              </section>
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
                <label htmlFor='confirmPassword' className='text-sm'>
                  メッセージ
                </label>
                <textarea
                  className='w-full p-2 border border-gray-300 rounded-md h-24 resize-none'
                  {...register('content')}
                />
                {errors.content && (
                  <span className='text-red-500 text-xs pl-2 font-semibold'>
                    {errors.content.message}
                  </span>
                )}
              </section>
            </div>
            <div className='w-full px-4 lg:px-0'>
              <button
                type='submit'
                className='w-full py-2 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:shadow-none hover:translate-y-1 hover:duration-300 transition-all'
              >
                送信
              </button>
            </div>
          </section>
        </form>
      </div>
    </section>
  )
}
