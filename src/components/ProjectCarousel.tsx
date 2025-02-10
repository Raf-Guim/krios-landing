'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  image: string
}

interface ProjectCarouselProps {
  projects: Project[]
  category: 'Residenciais' | 'Industriais' | 'Comerciais'
  title: string
}

export default function ProjectCarousel({ projects, category, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === projects.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <Link href={`/projetos/${category}`}>
      <div className="relative overflow-hidden rounded-xl group cursor-pointer">
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

          {/* Project Info */}
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
