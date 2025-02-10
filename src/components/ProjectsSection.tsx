'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCarousel from './ProjectCarousel'

const categories = ['Residenciais', 'Industriais', 'Comerciais']

const projects = {
  Residenciais: [
    { 
      id: 'residencial-1',
      title: 'Condomínio Luxury',
      description: 'Empreendimento residencial de alto padrão',
      image: '/projects/residencial-1.png',
    },
    { 
      id: 'residencial-2',
      title: 'Residencial Park',
      description: 'Conjunto de casas com área de lazer',
      image: '/projects/residencial-2.png',
    },
    { 
      id: 'residencial-3',
      title: 'Edifício Aurora',
      description: 'Torre residencial moderna',
      image: '/projects/residencial-3.png',
    },
  ],
  Industriais: [
    { 
      id: 'industrial-1',
      title: 'Complexo Industrial',
      description: 'Galpão industrial com escritórios',
      image: '/projects/industrial-1.png',
    },
    { 
      id: 'industrial-2',
      title: 'Centro Logístico',
      description: 'Centro de distribuição automatizado',
      image: '/projects/industrial-2.png',
    },
    { 
      id: 'industrial-3',
      title: 'Fábrica Modelo',
      description: 'Instalação industrial sustentável',
      image: '/projects/industrial-3.png',
    },
  ],
  Comerciais: [
    { 
      id: 'comercial-1',
      title: 'Centro Empresarial',
      description: 'Edifício comercial premium',
      image: '/projects/comercial-1.png',
    },
    { 
      id: 'comercial-2',
      title: 'Shopping Center',
      description: 'Centro comercial moderno',
      image: '/projects/comercial-2.png',
    },
    { 
      id: 'comercial-3',
      title: 'Office Tower',
      description: 'Torre de escritórios corporativos',
      image: '/projects/comercial-3.png',
    },
  ],
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Obras Realizadas
          </h2>
          <p className="text-darkGray max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais importantes em cada segmento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCarousel
              projects={projects.Residenciais}
              category="Residenciais"
              title="Projetos Residenciais"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectCarousel
              projects={projects.Industriais}
              category="Industriais"
              title="Projetos Industriais"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProjectCarousel
              projects={projects.Comerciais}
              category="Comerciais"
              title="Projetos Comerciais"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
