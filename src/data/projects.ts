interface Project {
  title: string;
  description: string;
  images: string[];
}

interface ProjectCategory {
  [key: string]: Project;
}

interface ProjectsData {
  [key: string]: ProjectCategory;
}

export const projectsData: ProjectsData = {
  residenciais: {
    camburiu: {
      title: 'Reforma em Balneário Cambuiú',
      description: 'Empreendimento residencial de alto padrão com 20 unidades',
      images: [
        '/projects/camburiu1.png',
        '/projects/camburiu2.png',
        '/projects/camburiu3.png',
        '/projects/camburiu4.png',
        '/projects/camburiu5.png',
      ],
    },
  },
  industriais: {
    'academia-mormai-jundiai': {
      title: 'Academia Mormai Jundiaí',
      description: 'Academia com área administrativa e de ginástica',
      images: [
        '/projects/academia-mormai-jundiai1.jpg',
        '/projects/academia-mormai-jundiai2.jpg',
        '/projects/academia-mormai-jundiai3.jpg',
        '/projects/academia-mormai-jundiai4.jpg',
        '/projects/academia-mormai-jundiai5.jpg',
      ],
    },
  },
};

// export type ProjectCategory = keyof typeof projectsData;
// export type Project = (typeof projectsData)[ProjectCategory][string];
