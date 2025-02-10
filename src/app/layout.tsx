import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krios Construções - Excelência em Construção Civil',
  description: 'Transformamos espaços com qualidade, inovação e compromisso. Especialistas em construção civil, reformas e projetos personalizados.',
  keywords: 'construção civil, reformas, projetos, construção comercial, construção residencial, construção industrial',
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
