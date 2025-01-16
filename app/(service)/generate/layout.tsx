import { GenerateTaskItemProvider } from '@/provider/GenerateTaskItemProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <GenerateTaskItemProvider>{children}</GenerateTaskItemProvider>
}
