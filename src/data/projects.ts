interface ProjectImages {
  before?: string[];
  after?: string[];
}

interface Project {
  title: string;
  description: string;
  images: ProjectImages;
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
      images: {
        after: [
          '/projects/camburiu/depois/1.png',
          '/projects/camburiu/depois/2.png',
          '/projects/camburiu/depois/3.png',
          '/projects/camburiu/depois/4.png',
          '/projects/camburiu/depois/5.png',
        ],
      },
    },
    'alta-vista-jundiai': {
      title: 'Alta Vista Jundiaí',
      description: 'Apartamento reformado luxuoso',
      images: {
        after: [
          '/projects/alta-vista-jundiai/depois/1.jpg',
          '/projects/alta-vista-jundiai/depois/2.jpg',
          '/projects/alta-vista-jundiai/depois/3.jpg',
          '/projects/alta-vista-jundiai/depois/4.jpg',
          '/projects/alta-vista-jundiai/depois/5.jpg',
          '/projects/alta-vista-jundiai/depois/6.jpg',
          '/projects/alta-vista-jundiai/depois/7.jpg',
          '/projects/alta-vista-jundiai/depois/8.jpg',
          '/projects/alta-vista-jundiai/depois/9.jpg',
          '/projects/alta-vista-jundiai/depois/10.jpg',
          '/projects/alta-vista-jundiai/depois/11.jpg',
          '/projects/alta-vista-jundiai/depois/12.jpg',
        ],
      },
    },
    'apto-vila-velha': {
      title: 'Apartamento em Vila Velha',
      description: 'Apartamento reformado',
      images: {
        before: [
          '/projects/apto-vila-velha/antes/1.jpg',
          '/projects/apto-vila-velha/antes/2.jpg',
          '/projects/apto-vila-velha/antes/3.jpg',
          '/projects/apto-vila-velha/antes/4.jpg',
          '/projects/apto-vila-velha/antes/5.jpg',
          '/projects/apto-vila-velha/antes/6.jpg',
          '/projects/apto-vila-velha/antes/7.jpg',
        ],
        after: [
          '/projects/apto-vila-velha/depois/1.jpg',
          '/projects/apto-vila-velha/depois/2.jpg',
          '/projects/apto-vila-velha/depois/3.jpg',
          '/projects/apto-vila-velha/depois/4.jpg',
          '/projects/apto-vila-velha/depois/5.jpg',
          '/projects/apto-vila-velha/depois/6.jpg',
          '/projects/apto-vila-velha/depois/7.jpg',
        ],
      },
    },
  },
  industriais: {
    'academia-mormai-jundiai': {
      title: 'Academia Mormai Jundiaí',
      description: 'Academia com área administrativa e de ginástica',
      images: {
        after: [
          '/projects/academia-mormai-jundiai/depois/1.jpg',
          '/projects/academia-mormai-jundiai/depois/2.jpg',
          '/projects/academia-mormai-jundiai/depois/3.jpg',
          '/projects/academia-mormai-jundiai/depois/4.jpg',
          '/projects/academia-mormai-jundiai/depois/5.jpg',
        ],
      },
    },
  },
};
