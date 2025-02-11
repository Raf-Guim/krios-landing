interface Project {
  title: string;
  description: string;
  fullDescription: string;
  location: string;
  area: string;
  year: string;
  features: string[];
  images: string[];
  specifications: Record<string, string>;
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
      fullDescription: `
        O Condomínio Luxury é um empreendimento residencial de alto padrão que redefine o conceito de moradia de luxo.
        Com 20 unidades exclusivas, cada residência foi projetada para oferecer o máximo em conforto e sofisticação.
      `,
      location: 'São Paulo, SP',
      area: '15.000m²',
      year: '2024',
      features: [
        'Área de lazer completa',
        'Piscina aquecida',
        'Academia equipada',
        'Segurança 24h',
        'Vagas duplas',
      ],
      images: [
        '/projects/camburiu1.png',
        '/projects/camburiu2.png',
        '/projects/camburiu3.png',
        '/projects/camburiu4.png',
        '/projects/camburiu5.png',
      ],
      specifications: {
        'Área do terreno': '5.000m²',
        'Área construída': '15.000m²',
        'Número de unidades': '20',
        'Número de andares': '15',
        'Vagas por unidade': '2-3',
      },
    },
  },
  industriais: {
    'galpao-industrial': {
      title: 'Galpão Industrial',
      description: 'Complexo industrial moderno com área administrativa',
      fullDescription: `
        Projeto industrial de última geração, combinando eficiência operacional com sustentabilidade.
        Inclui área administrativa integrada e sistemas automatizados.
      `,
      location: 'Joinville, SC',
      area: '8.000m²',
      year: '2023',
      features: [
        'Pé direito alto',
        'Docas automatizadas',
        'Escritórios integrados',
        'Sistema de ventilação natural',
        'Iluminação LED',
      ],
      images: [
        '/projects/industrial1.jpg',
        '/projects/industrial2.jpg',
        '/projects/industrial3.jpg',
      ],
      specifications: {
        'Área do terreno': '12.000m²',
        'Área construída': '8.000m²',
        'Pé direito': '12m',
        'Número de docas': '8',
        'Vagas de estacionamento': '100',
      },
    },
  },
  comerciais: {
    'centro-empresarial': {
      title: 'Centro Empresarial',
      description: 'Edifício comercial com conceito open space',
      fullDescription: `
        Centro empresarial moderno com espaços flexíveis e áreas colaborativas.
        Projetado para atender às necessidades do ambiente corporativo contemporâneo.
      `,
      location: 'Florianópolis, SC',
      area: '10.000m²',
      year: '2023',
      features: [
        'Lobby moderno',
        'Salas modulares',
        'Áreas de convivência',
        'Auditório',
        'Estacionamento rotativo',
      ],
      images: [
        '/projects/comercial1.jpg',
        '/projects/comercial2.jpg',
        '/projects/comercial3.jpg',
      ],
      specifications: {
        'Área do terreno': '2.500m²',
        'Área construída': '10.000m²',
        'Número de andares': '12',
        'Salas por andar': '8',
        'Vagas de garagem': '200',
      },
    },
  },
};

// export type ProjectCategory = keyof typeof projectsData;
// export type Project = (typeof projectsData)[ProjectCategory][string];
