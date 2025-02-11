'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  { label: 'Pilares', href: '#pillars' },
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMainPage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {isMainPage ? (
            <a href="#hero" className="flex items-center">
              <Image
                src="/logo-3.svg"
                alt="Krios Logo"
                width={120}
                height={40}
                className="transition-all duration-300"
              />
            </a>
          ) : (
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-3.svg"
                alt="Krios Logo"
                width={120}
                height={40}
                className="transition-all duration-300"
              />
            </Link>
          )}

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              isMainPage ? (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={index}
                  href={`/${item.href}`}
                  className="text-sm font-medium transition-colors hover:text-primary text-white"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            aria-label="Menu"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-dark' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
