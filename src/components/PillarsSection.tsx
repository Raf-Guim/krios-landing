'use client'

import { motion } from 'framer-motion'
import { FaClock, FaCheckCircle, FaCoins, FaShieldAlt } from 'react-icons/fa'

const pillars = [
  {
    icon: FaClock,
    title: 'Prazo',
    description: 'Compromisso em cumprir prazos com excelência.',
  },
  {
    icon: FaCheckCircle,
    title: 'Qualidade',
    description: 'Garantia de alto padrão em todas as obras.',
  },
  {
    icon: FaCoins,
    title: 'Valor Final',
    description: 'Melhor custo-benefício para o cliente.',
  },
  {
    icon: FaShieldAlt,
    title: 'Segurança',
    description: 'Processos seguros para clientes e equipe.',
  },
]

const differentials = [
  'Transparência total com os clientes',
  'Compromisso e experiência no setor',
  'Equipe técnica altamente capacitada',
  'Qualidade aliada ao baixo custo',
]

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Nossos Pilares
          </h2>
          <p className="text-darkGray max-w-2xl mx-auto">
            Construímos nossa reputação sobre bases sólidas, garantindo a satisfação total de nossos clientes.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <pillar.icon className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-2">{pillar.title}</h3>
              <p className="text-darkGray">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark text-white p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Nossos Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 bg-primary rounded-full" />
                <p className="text-secondary/90">{differential}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
