'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Carrefour', logo: '/partners/carrefour.png' },
  { name: 'Grupo Vamos', logo: '/partners/grupoVamos.png' },
  { name: 'Razzo', logo: '/partners/razzo.png' },
  { name: 'Rede Voa', logo: '/partners/redeVoa.png' },
  { name: 'Oxxo', logo: '/partners/oxxo.png' },
  { name: 'GPA', logo: '/partners/gpa.png' },
  { name: 'Shopee', logo: '/partners/shopee.png' },
  { name: 'Flex Aero', logo: '/partners/flexAero.png' },
  { name: 'Via Varejo', logo: '/partners/viaVarejo.png' },
  { name: 'Mercurio', logo: '/partners/mercurio.png' },
  { name: 'Grupo Dpsp', logo: '/partners/grupoDpsp.png' },
  { name: 'Heineken', logo: '/partners/heineken.png' },
  { name: 'Grupo Partage', logo: '/partners/grupoPartage.svg' },
  { name: 'Villefort', logo: '/partners/villefort.png' },
  { name: 'Auto Glass', logo: '/partners/autoglass.png' },
  { name: 'Sicoob', logo: '/partners/sicoob.png' },
  { name: 'Pague Menos', logo: '/partners/pagueMenos.png' },
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
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow h-[100px]"
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
