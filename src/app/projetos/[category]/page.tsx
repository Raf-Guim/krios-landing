'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

// This would typically come from an API or database
const projects = {
  residenciais: [
    {
      id: 'residencial-1',
      title: 'Condomínio Luxury',
      description: 'Empreendimento residencial de alto padrão com 20 unidades',
      image: '/projects/residential-1.jpg',
      location: 'São Paulo, SP',
      area: '15.000m²',
      year: '2024',
    },
    // Add more projects...
  ],
  industriais: [
    {
      id: 'industrial-1',
      title: 'Complexo Industrial',
      description: 'Galpão industrial com escritórios integrados',
      image: '/projects/industrial-1.jpg',
      location: 'Guarulhos, SP',
      area: '30.000m²',
      year: '2023',
    },
    // Add more projects...
  ],
  comerciais: [
    {
      id: 'comercial-1',
      title: 'Centro Empresarial',
      description: 'Edifício comercial premium com 15 andares',
      image: '/projects/commercial-1.jpg',
      location: 'São Paulo, SP',
      area: '25.000m²',
      year: '2024',
    },
    // Add more projects...
  ],
}

const categoryTitles = {
  residenciais: 'Projetos Residenciais',
  industriais: 'Projetos Industriais',
  comerciais: 'Projetos Comerciais',
}

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as keyof typeof projects
  const categoryProjects = projects[category] || []

  return (
    <div className="min-h-screen bg-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link 
            href="/#projects"
            className="inline-block text-primary hover:text-primary/80 mb-4"
          >
            ← Voltar para Projetos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            {categoryTitles[category]}
          </h1>
          <p className="text-darkGray max-w-2xl mx-auto">
            Conheça nossos projetos mais importantes neste segmento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projetos/${category}/${project.id}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-dark mb-2">
                      {project.title}
                    </h2>
                    <p className="text-darkGray mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-darkGray/80">
                      <span>📍 {project.location}</span>
                      <span>📏 {project.area}</span>
                      <span>📅 {project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
