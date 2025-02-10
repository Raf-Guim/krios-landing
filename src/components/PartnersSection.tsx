'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Partner 1', logo: '/partners/1.png' },
  { name: 'Partner 2', logo: '/partners/2.png' },
  { name: 'Partner 3', logo: '/partners/3.png' },
  { name: 'Partner 4', logo: '/partners/4.png' },
  { name: 'Partner 5', logo: '/partners/5.png' },
  { name: 'Partner 6', logo: '/partners/6.png' },
  { name: 'Partner 6', logo: '/partners/7.png' },
  { name: 'Partner 6', logo: '/partners/8.png' },
  { name: 'Partner 6', logo: '/partners/9.png' },
  { name: 'Partner 6', logo: '/partners/10.png' },
  { name: 'Partner 6', logo: '/partners/11.png' },
  { name: 'Partner 6', logo: '/partners/12.png' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-dark mb-4">
            Nossos Parceiros
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
