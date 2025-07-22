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
    'alta-vista-jundiai': {
      title: 'Alta Vista Jundiaí',
      description: 'Apartamento reformado luxuoso',
      images: [
        '/projects/alta-vista-jundiai1.jpg',
        '/projects/alta-vista-jundiai2.jpg',
        '/projects/alta-vista-jundiai3.jpg',
        '/projects/alta-vista-jundiai4.jpg',
        '/projects/alta-vista-jundiai5.jpg',
        '/projects/alta-vista-jundiai6.jpg',
        '/projects/alta-vista-jundiai7.jpg',
        '/projects/alta-vista-jundiai8.jpg',
        '/projects/alta-vista-jundiai9.jpg',
        '/projects/alta-vista-jundiai10.jpg',
        '/projects/alta-vista-jundiai11.jpg',
        '/projects/alta-vista-jundiai12.jpg',
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
