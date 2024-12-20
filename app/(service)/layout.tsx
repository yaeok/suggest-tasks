import AuthGuard from '@/components/AuthGuard/AuthGuard'
import Main from '@/components/Main/Main'
import { CurrentUserProvider } from '@/provider/CurrentUserProvider'
import { GenerateTaskItemsProvider } from '@/provider/GenerateTaskItemsProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CurrentUserProvider>
      <AuthGuard>
        <GenerateTaskItemsProvider>
          <Main>{children}</Main>
        </GenerateTaskItemsProvider>
      </AuthGuard>
    </CurrentUserProvider>
  )
}
