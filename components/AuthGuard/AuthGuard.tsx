'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

import FullScreenLoading from '@/components/Loading/FullScreenLoading'
import { RoutePath } from '@/constants/RoutePath'
import { useAuthContext } from '@/provider/CurrentUserProvider'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const currentUser = useAuthContext()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!currentUser) {
      return
    }

    if (currentUser.currentUser != null && currentUser.isEmailVerified) {
      // 認証情報有かつメール認証済
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    } else if (
      currentUser.currentUser != null &&
      !currentUser.isEmailVerified
    ) {
      // 認証情報有かつメール未認証
      setTimeout(() => {
        router.replace(RoutePath.EMAIL_VERIFICATION)
      }, 2000)
    } else {
      // 認証情報無
      setTimeout(() => {
        router.replace(RoutePath.HOME)
      }, 2000)
    }
  }, [currentUser, router])

  return (
    <div>
      {loading ? (
        <FullScreenLoading message='ユーザ認証情報取得中...' />
      ) : (
        children
      )}
    </div>
  )
}
