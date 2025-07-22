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
          '/projects/camburiu1.png',
          '/projects/camburiu2.png',
          '/projects/camburiu3.png',
          '/projects/camburiu4.png',
          '/projects/camburiu5.png',
        ],
      },
    },
    'alta-vista-jundiai': {
      title: 'Alta Vista Jundiaí',
      description: 'Apartamento reformado luxuoso',
      images: {
        after: [
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
    'apto-vila-velha': {
      title: 'Apartamento em Vila Velha',
      description: 'Apartamento reformado',
      images: {
        before: [
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes1.jpg',
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes2.jpg',
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes3.jpg',
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes4.jpg',
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes5.jpg',
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes6.jpg',
          '/projects/apto-vila-velha/antes/apto-vila-velha-antes7.jpg',
        ],
        after: [
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois1.jpg',
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois2.jpg',
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois3.jpg',
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois4.jpg',
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois5.jpg',
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois6.jpg',
          '/projects/apto-vila-velha/depois/apto-vila-velha-depois7.jpg',
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
          '/projects/academia-mormai-jundiai1.jpg',
          '/projects/academia-mormai-jundiai2.jpg',
          '/projects/academia-mormai-jundiai3.jpg',
          '/projects/academia-mormai-jundiai4.jpg',
          '/projects/academia-mormai-jundiai5.jpg',
        ],
      },
    },
  },
};
