import type { Metadata } from 'next'
import '@/app/globals.css'
import Header from '@/components/layout/header'

export const metadata: Metadata = {
  title: '>_ Arya Maulana',
  description: 'Web Designer who treats every project like a puzzle worth solving.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}