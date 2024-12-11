import Main from '@/components/Main/Main'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Main>{children}</Main>
}
