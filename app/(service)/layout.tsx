import AuthGuard from '@/components/AuthGuard/AuthGuard'
import Main from '@/components/Main/Main'
import { CurrentUserProvider } from '@/provider/CurrentUserProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CurrentUserProvider>
      <AuthGuard>
        <Main>{children}</Main>
      </AuthGuard>
    </CurrentUserProvider>
  )
}
