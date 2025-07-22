'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { projectsData } from '@/data/projects'
import Header from '@/components/Header'
import ImageModal from '@/components/ImageModal'

export default function ProjectPage() {
  const params = useParams()
  const category = (params.category as string).toLowerCase() as keyof typeof projectsData
  const projectId = params.id as string
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  
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

  // Prepare gallery sections and flat image list for modal
  const hasBefore = project.images.before && project.images.before.length > 0;
  const hasAfter = project.images.after && project.images.after.length > 0;

  // Build the gallery display and flat image list for modal
  const gallerySections: { title?: string; images: string[] }[] = [
    ...(hasBefore ? [{ title: 'Antes', images: project.images.before! }] : []),
    ...(hasAfter ? [{ title: hasBefore ? 'Depois' : undefined, images: project.images.after! }] : []),
  ];
  const flatImages: string[] = [
    ...(hasBefore ? project.images.before! : []),
    ...(hasAfter ? project.images.after! : []),
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < flatImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  return (
    <>
      <Header />
      <div className="bg-secondary pt-20 px-4 md:px-8 pb-20">
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
          {gallerySections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-8">
              {section.title && (
                <h2 className="text-2xl font-semibold text-dark mb-4">{section.title}</h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.images.map((image, idx) => {
                  // Calculate the flat index for modal
                  const flatIndex =
                    gallerySections
                      .slice(0, sectionIdx)
                      .reduce((acc, s) => acc + s.images.length, 0) + idx;
                  const imageClasses = [
                    'sm:col-span-2 lg:col-span-3 aspect-[21/9]',
                    'aspect-[4/3]',
                    'aspect-[4/3]',
                    'aspect-[4/3]',
                    'aspect-[4/3]',
                    'aspect-[4/3]',
                  ];
                  return (
                    <div
                      key={idx}
                      className={`relative ${imageClasses[idx] || 'aspect-[4/3]'} overflow-hidden rounded-lg cursor-pointer`}
                      onClick={() => handleImageClick(flatIndex)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${flatIndex + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={flatIndex === 0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Modal de Imagem */}
          {selectedImageIndex !== null && (
            <ImageModal
              images={flatImages}
              currentIndex={selectedImageIndex}
              onClose={handleCloseModal}
              onNext={handleNextImage}
              onPrevious={handlePreviousImage}
              title={project.title}
            />
          )}
        </div>
      </div>
    </>
  )
}
