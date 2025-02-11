'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { projectsData } from '@/data/projects'
import Header from '@/components/Header'

const categoryTitles = {
  residenciais: 'Projetos Residenciais',
  industriais: 'Projetos Industriais',
  comerciais: 'Projetos Comerciais',
} as const

type CategoryType = keyof typeof categoryTitles

function isValidCategory(category: string): category is CategoryType {
  return category in categoryTitles
}

export default function CategoryPage() {
  const params = useParams()
  const categoryParam = (params.category as string).toLowerCase()
  
  if (!isValidCategory(categoryParam)) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-secondary pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
            <Link href="/projetos" className="text-primary hover:underline">
              Voltar para projetos
            </Link>
          </div>
        </div>
      </>
    )
  }

  const category = categoryParam
  
  // Verify if the category exists in projectsData
  if (!(category in projectsData)) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-secondary pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
            <Link href="/projetos" className="text-primary hover:underline">
              Voltar para projetos
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Convert the object format to array format
  const categoryProjects = Object.entries(projectsData[category]).map(([id, project]) => ({
    id,
    ...project,
    image: project.images[0] // Use the first image as the main image
  }))

  console.log(`projectsData: ${projectsData[category]}, category: ${category}, categoryProjects:`, categoryProjects)

  if (!categoryProjects.length) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-secondary pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-dark mb-4">Nenhum projeto encontrado</h1>
            <Link href="/#projects" className="text-primary hover:text-primary/80">
              Voltar para Projetos
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#projects"
              className="inline-block text-primary hover:text-primary/80 mb-8"
            >
              ← Voltar para Projetos
            </Link>

            <h1 className="text-4xl font-bold text-dark mb-8">
              {categoryTitles[category]}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href={`/projetos/${category}/${project.id}`}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-darkGray">{project.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
