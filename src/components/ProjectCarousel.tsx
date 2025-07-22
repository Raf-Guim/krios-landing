'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  image: string
}

interface ProjectCarouselProps {
  projects: Project[]
  category: 'Residenciais' | 'Industriais'
  title: string
}

export default function ProjectCarousel({ projects, category, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width)
      }
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length])

  // If there are no projects, show a placeholder
  if (!projects || projects.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-xl group cursor-pointer bg-gray-100">
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-dark/80 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="aspect-[4/3] relative flex items-center justify-center">
          <p className="text-gray-500">Em breve</p>
        </div>
      </div>
    )
  }

  return (
    <Link href={`/projetos/${category}`}>
      <div ref={containerRef} className="relative overflow-hidden rounded-xl group cursor-pointer">
        {/* Category Title */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-dark/80 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>

        {/* Project Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors duration-300" />
            </motion.div>
          </AnimatePresence>

          {/* Project Info - Only show if container width is >= 300px */}
          {containerWidth >= 300 && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 to-transparent">
              <motion.h4
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold text-white mb-2"
              >
                {projects[currentIndex].title}
              </motion.h4>
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-secondary/90"
              >
                {projects[currentIndex].description}
              </motion.p>
            </div>
          )}

          {/* Navigation Dots */}
          <div className="absolute bottom-4 right-4 flex gap-2 z-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
