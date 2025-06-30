'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { projectsData } from '@/data/projects'
import Header from '@/components/Header'

export default function ProjectPage() {
  const params = useParams()
  const category = (params.category as string).toLowerCase() as keyof typeof projectsData
  const projectId = params.id as string
  
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
        <div className="max-w-6xl mx-auto">
          <Link href={`/projetos/${category}`} className="inline-block mb-8 text-primary hover:text-primary/80 mt-8">
            ← Voltar para {category}
          </Link>
          
          {/* Project Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">{project.title}</h1>
            <p className="text-gray-600 text-lg">{project.description}</p>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => {
              // Define diferentes classes para cada imagem baseado no índice
              const imageClasses = [
                'sm:col-span-2 lg:col-span-3 aspect-[21/9]', // Primeira imagem - panorâmica
                'aspect-[4/3]', // Segunda imagem
                'aspect-[4/3]', // Terceira imagem
                'aspect-[4/3]', // Quarta imagem
                'aspect-[4/3]', // Quinta imagem
                'aspect-[4/3]', // Sexta imagem
              ]

              return (
                <div 
                  key={index} 
                  className={`relative ${imageClasses[index] || 'aspect-[4/3]'} overflow-hidden rounded-lg`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
