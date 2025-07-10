'use client'

import { useCallback, useEffect } from 'react'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface ImageModalProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  title: string
}

export default function ImageModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  title,
}: ImageModalProps) {
  // Fechar o modal com a tecla ESC
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        onNext()
      } else if (event.key === 'ArrowLeft') {
        onPrevious()
      }
    },
    [onClose, onNext, onPrevious]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [handleKeyDown])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      {/* Botão Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors"
        aria-label="Fechar"
      >
        <FiX size={24} />
      </button>

      {/* Botão Anterior */}
      {currentIndex > 0 && (
        <button
          onClick={onPrevious}
          className="absolute left-4 z-50 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Imagem anterior"
        >
          <FiChevronLeft size={32} />
        </button>
      )}

      {/* Botão Próximo */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Próxima imagem"
        >
          <FiChevronRight size={32} />
        </button>
      )}

      {/* Imagem */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Imagem ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}
