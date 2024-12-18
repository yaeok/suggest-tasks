import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Level-UP',
  description:
    '駆け出しエンジニアからレベルアップ！何を作ったらいいかわからないを解決します！',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={`font-mono antialiased`}>{children}</body>
    </html>
  )
}
