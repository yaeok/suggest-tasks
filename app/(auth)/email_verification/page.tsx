'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Header from '@/components/Header/Header';
import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal';
import { RoutePath } from '@/constants/RoutePath';
import { UserNotFoundException } from '@/infrastructure/exception/UserNotFoundException';
import {
  CheckEmailVerifiedUseCase
} from '@/usercase/check_email_verified_use_case/check_email_verified_use_case';
import { ResendEmailUseCase } from '@/usercase/resend_email_use_case/resend_email_use_case';

export default function EmailVerificationPage() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  // メール認証確認ボタン押下
  const handleCheckEmailVerified = async () => {
    try {
      // インスタンス生成
      const usecase = new CheckEmailVerifiedUseCase()
      // メール認証確認処理
      const isEmailVerified = await usecase.checkEmailVerified()

      // 結果判定
      if (isEmailVerified) {
        // メール認証の場合
        router.push(RoutePath.GENERATE)
      } else {
        // メール未認証の場合
        setMessage('メールが認証されていません')
        setIsOpen(true)
      }
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        // ユーザーが存在しない場合
        setMessage(error.message)
        setIsOpen(true)
      } else {
        // その他のエラーの場合
        setMessage('エラーが発生しました。開発者へ連絡してください。')
        setIsOpen(true)
      }
    }
  }

  // メール再送信ボタン押下
  const handleResendEmail = async () => {
    try {
      // インスタンス生成
      const usecase = new ResendEmailUseCase()
      // メール再送信処理
      await usecase.resendEmail()
      // メール再送信処理
      setMessage('メールを再送信しました')
      setIsOpen(true)
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        // ユーザーが存在しない場合
        setMessage(error.message)
        setIsOpen(true)
      } else {
        // その他のエラーの場合
        setMessage('エラーが発生しました。開発者へ連絡してください。')
        setIsOpen(true)
      }
    }
  }
  return (
    <section className='w-screen min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      <Header isSignedIn={false} />
      <section className='mx-4 md:m-0 md:w-1/3 p-8 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg'>
        <h1 className='text-4xl font-semibold text-black text-center py-4'>
          メール確認
        </h1>
        <div className='py-4 flex flex-col gap-2'>
          <button
            onClick={handleCheckEmailVerified}
            className='px-4 py-2 bg-blue-500 rounded-full text-white font-semibold'
          >
            認証しました
          </button>
          <button
            onClick={handleResendEmail}
            className='px-4 py-2 bg-green-500 rounded-full text-white font-semibold'
          >
            認証メールを再送信
          </button>
        </div>
      </section>

      <ErrorMessageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
    </section>
  )
}
