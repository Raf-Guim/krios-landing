'use client'

import { motion } from 'framer-motion'
import { projectsData } from '@/data/projects'
import ProjectCarousel from './ProjectCarousel'

const PLACEHOLDER_IMAGE = '/projects/placeholder.jpg'; // You can change this path to any placeholder image you have

// Helper to get the main image from the new images structure
function getMainImage(images: { after?: string[]; before?: string[] }) {
  if (images.after && images.after.length > 0) return images.after[0];
  if (images.before && images.before.length > 0) return images.before[0];
  return PLACEHOLDER_IMAGE;
}

// Convert the project data into the format needed for the projects section
const projects = {
  Residenciais: Object.entries(projectsData.residenciais).map(([id, project]) => ({
    id,
    title: project.title,
    description: project.description,
    image: getMainImage(project.images),
  })),
  Industriais: Object.entries(projectsData.industriais).map(([id, project]) => ({
    id,
    title: project.title,
    description: project.description,
    image: getMainImage(project.images),
  })),
  // Comerciais: Object.entries(projectsData.comerciais).map(([id, project]) => ({
  //   id,
  //   title: project.title,
  //   description: project.description,
  //   image: getMainImage(project.images),
  // })),
}

console.log(projects)

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              title="Projetos Industriais e Varejo"
            />
          </motion.div>

          {/* <motion.div
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
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
