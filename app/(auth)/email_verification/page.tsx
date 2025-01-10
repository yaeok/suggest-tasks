'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Header from '@/components/Header/Header'
import ErrorMessageModal from '@/components/Modal/ErrorMessage/ErrorMessageModal'
import SuccessMessageModal from '@/components/Modal/SuccessMessage/SuccessMessageModal'
import { RoutePath } from '@/constants/RoutePath'
import { UserNotFoundException } from '@/infrastructure/exception/UserNotFoundException'
import { CheckEmailVerifiedUseCase } from '@/usercase/check_email_verified_use_case/check_email_verified_use_case'
import { ResendEmailUseCase } from '@/usercase/resend_email_use_case/resend_email_use_case'

export default function EmailVerificationPage() {
  const router = useRouter()

  // エラーメッセージモーダル用
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false)
  const [erroMessage, setErrorMessage] = useState('')

  // 成功メッセージモダール用
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // メール認証確認ボタン押下
  const handleCheckEmailVerified = async () => {
    try {
      // インスタンス生成
      const usecase = new CheckEmailVerifiedUseCase()
      // メール認証確認処理
      const isEmailVerified = await usecase.execute()

      // 結果判定
      if (isEmailVerified) {
        // メール認証の場合
        router.push(RoutePath.GENERATE)
      } else {
        // メール未認証の場合
        setErrorMessage('メールが認証されていません')
        setIsOpenErrorModal(true)
      }
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        // ユーザーが存在しない場合
        setErrorMessage(error.message)
        setIsOpenErrorModal(true)
      } else {
        // その他のエラーの場合
        setErrorMessage('エラーが発生しました。開発者へ連絡してください。')
        setIsOpenErrorModal(true)
      }
    }
  }

  // メール再送信ボタン押下
  const handleResendEmail = async () => {
    try {
      // インスタンス生成
      const usecase = new ResendEmailUseCase()
      // メール再送信処理
      await usecase.execute()
      // メール再送信処理
      setSuccessMessage('メールを再送信しました')
      setIsOpenSuccessModal(true)
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        // ユーザーが存在しない場合
        setErrorMessage(error.message)
        setIsOpenErrorModal(true)
      } else {
        // その他のエラーの場合
        setErrorMessage('エラーが発生しました。開発者へ連絡してください。')
        setIsOpenErrorModal(true)
      }
    }
  }
  return (
    <section className='w-screen min-h-screen bg-blue-50 flex flex-col justify-center items-center'>
      {/* ヘッダー */}
      <Header isSignedIn={false} />

      {/* メール確認フォーム */}
      <div className='w-full md:w-2/3 lg:w-1/3 py-8 m-16 flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg'>
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
      </div>

      {/* エラーメッセージモーダル */}
      <ErrorMessageModal
        isOpen={isOpenErrorModal}
        onClose={() => setIsOpenErrorModal(false)}
        message={erroMessage}
      />

      {/* 成功メッセージモーダル */}
      <SuccessMessageModal
        isOpen={isOpenSuccessModal}
        onClose={() => setIsOpenSuccessModal(false)}
        message={successMessage}
      />
    </section>
  )
}
