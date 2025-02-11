'use client'

// import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { projectsData } from '@/data/projects'
import Header from '@/components/Header'

export default function ProjectPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  // Convert category to lowercase since our data uses lowercase keys
  const category = (params.category as string).toLowerCase() as keyof typeof projectsData
  const projectId = params.id as string
  console.log(`category: ${category}, projectId: ${projectId}`);
  
  // Add type safety check
  if (!(category in projectsData) || !(projectId in projectsData[category])) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-secondary pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark mb-4">Projeto não encontrado</h1>
            <Link href="/#projects" className="text-primary hover:text-primary/80">
              Voltar para Projetos
            </Link>
          </div>
        </div>
      </>
    )
  }

  const project = projectsData[category][projectId]

  return (
    <>
    <Header />
    <div className="min-h-screen bg-secondary pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href={`/projetos/${category}`} className="inline-block mb-8 text-primary hover:text-primary/80 mt-8">
          ← Voltar para {category}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-video mb-4">
              <Image
                src={project.images[selectedImage]}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-video ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h1 className="text-4xl font-bold text-dark mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-6">{project.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-dark">Localização</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-dark">Área</h3>
                <p className="text-gray-600">{project.area}</p>
              </div>
              <div>
                <h3 className="font-semibold text-dark">Ano</h3>
                <p className="text-gray-600">{project.year}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-dark mb-2">Características</h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-dark mb-2">Especificações</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="font-medium text-dark">{key}</p>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
