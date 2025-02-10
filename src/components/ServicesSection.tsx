'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaPencilRuler, FaTools } from 'react-icons/fa'

const services = [
  {
    icon: FaBuilding,
    title: 'Construção e Reformas',
    description: 'Máxima qualidade e excelência, seja em grandes empreendimentos ou projetos de menor escala.',
    image: '/services/construction.jpg'
  },
  {
    icon: FaPencilRuler,
    title: 'Projetos',
    description: 'Planejamento otimizado, com execução segura e eficiente para transformar ideias em realidade.',
    image: '/services/projects.jpg'
  },
  {
    icon: FaTools,
    title: 'Instalações',
    description: 'Instalações otimizadas e organizadas, com serviços executados de maneira segura e objetiva.',
    image: '/services/installations.jpg'
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-darkGray max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, com foco na qualidade e satisfação do cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/50 transition-colors" />
                <service.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                <p className="text-darkGray">{service.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
