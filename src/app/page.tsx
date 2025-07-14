'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PillarsSection from '@/components/PillarsSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import PartnersSection from '@/components/PartnersSection'
import ContactSection from '@/components/ContactSection'
import InstagramFeed from '@/components/InstagramFeed'

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <PillarsSection />
        <ServicesSection />
        {/* <InstagramFeed /> */}
        <ProjectsSection />
        <PartnersSection />
        <ContactSection />
      </motion.div>
    </div>
  )
}
