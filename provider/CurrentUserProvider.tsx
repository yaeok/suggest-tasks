'use client'

import { onAuthStateChanged } from 'firebase/auth'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import FullScreenLoading from '@/components/Loading/FullScreenLoading'
import { auth } from '@/infrastructure/firebase/config'
import { FirebaseUserRepository } from '@/infrastructure/repository/users/impl/FirebaseUserRepository'
import { User } from '@/model/User'

type AuthContextType = {
  currentUser: User | null
  isEmailVerified: boolean
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => useContext(AuthContext)

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isEmailVerified, setIsVerified] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const repository = new FirebaseUserRepository()
        const response = await repository.getUserById({ uid: user.uid })
        setCurrentUser(response)

        if (user.emailVerified) {
          setIsVerified(true)
        } else {
          setIsVerified(false)
        }
      } else {
        setCurrentUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isEmailVerified,
        setCurrentUser,
      }}
    >
      {loading ? (
        <FullScreenLoading message='ユーザ認証情報取得中...' />
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}
