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
    'galpao-industrial': {
      title: 'Galpão Industrial',
      description: 'Complexo industrial moderno com área administrativa',
      images: [
        '/projects/industrial1.jpg',
        '/projects/industrial2.jpg',
        '/projects/industrial3.jpg',
      ],
    },
  },
};

// export type ProjectCategory = keyof typeof projectsData;
// export type Project = (typeof projectsData)[ProjectCategory][string];
