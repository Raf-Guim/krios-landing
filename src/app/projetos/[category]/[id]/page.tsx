'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'

// This would typically come from an API or database
const projectsData = {
  residenciais: {
    'residencial-1': {
      title: 'Condomínio Luxury',
      description: 'Empreendimento residencial de alto padrão com 20 unidades',
      fullDescription: `
        O Condomínio Luxury é um empreendimento residencial de alto padrão que redefine o conceito de moradia de luxo.
        Com 20 unidades exclusivas, cada residência foi projetada para oferecer o máximo em conforto e sofisticação.
      `,
      location: 'São Paulo, SP',
      area: '15.000m²',
      year: '2024',
      features: [
        'Área de lazer completa',
        'Piscina aquecida',
        'Academia equipada',
        'Segurança 24h',
        'Vagas duplas',
      ],
      images: [
        '/projects/residential-1.jpg',
        '/projects/residential-1-2.jpg',
        '/projects/residential-1-3.jpg',
        '/projects/residential-1-4.jpg',
      ],
      specifications: {
        'Área do terreno': '5.000m²',
        'Área construída': '15.000m²',
        'Número de unidades': '20',
        'Número de andares': '15',
        'Vagas por unidade': '2-3',
      },
    },
    // Add more projects...
  },
  industriais: {
    // Add industrial projects...
  },
  comerciais: {
    // Add commercial projects...
  },
}

export default function ProjectPage() {
  const params = useParams()
  const category = params.category as keyof typeof projectsData
  const projectId = params.id as string
  const project = projectsData[category]?.[projectId]
  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-secondary pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">Projeto não encontrado</h1>
          <Link href="/#projects" className="text-primary hover:text-primary/80">
            Voltar para Projetos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href={`/projetos/${category}`}
            className="inline-block text-primary hover:text-primary/80 mb-4"
          >
            ← Voltar para {category}
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-darkGray max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-9">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={project.images[selectedImage]}
                  alt={`${project.title} - Imagem ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-dark mb-4">Sobre o Projeto</h2>
                <p className="text-darkGray whitespace-pre-line mb-8">
                  {project.fullDescription}
                </p>

                <h3 className="text-xl font-semibold text-dark mb-4">Características</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-darkGray">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-dark mb-4">Especificações</h2>
                <dl className="space-y-4">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm text-darkGray/80">{key}</dt>
                      <dd className="text-dark font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
