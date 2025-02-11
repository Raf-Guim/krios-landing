import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krios Engenharia',
  description: 'Krios Engenharia - Soluções em engenharia civil',
  keywords: 'construção civil, reformas, projetos, construção comercial, construção residencial, construção industrial',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Krios Engenharia',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <main className="relative min-h-screen bg-secondary">
          {children}
        </main>
      </body>
    </html>
  )
}
