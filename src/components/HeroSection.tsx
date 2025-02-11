'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const stats = [
  { label: 'Obras entregues', value: '150+' },
  { label: 'M² construídos', value: '500k+' },
  { label: 'Clientes recorrentes', value: '95%+' },
]

export default function HeroSection() {
  return (
    <section 
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center bg-dark text-white overflow-hidden pt-20"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/60" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando sonhos em realidade
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-secondary/90">
            Construímos o futuro com qualidade, inovação e compromisso
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark/30 backdrop-blur-sm p-6 rounded-lg border border-white/10"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-secondary/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5511955825695?text=Olá! Vim pelo site da Krios e gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            <FaWhatsapp className="animate-bounce text-2xl font-bold" />
            +55 (11) 95582-5695
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
