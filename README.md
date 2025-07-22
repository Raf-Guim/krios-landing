# Krios Landing Page

Uma landing page moderna e profissional para empresa de construção civil, desenvolvida com Next.js e Tailwind CSS.

## Características

- **Design Moderno e Responsivo**
  - Interface elegante e profissional
  - Otimizado para todos os dispositivos
  - Tema escuro com efeitos de vidro (glassmorphism)
  - Animações suaves com Framer Motion

- **Seções Principais**
  - Header fixo com navegação
  - Hero section com estatísticas
  - Pilares da empresa
  - Serviços oferecidos
  - Portfólio de projetos com carrosséis
  - Seção de contato

- **Portfólio Interativo**
  - Carrosséis por categoria (Residencial, Industrial, Comercial)
  - Páginas dedicadas para cada categoria
  - Páginas detalhadas de projetos individuais
  - Galeria de imagens com miniaturas

- **Otimização**
  - SEO otimizado
  - Carregamento de imagens otimizado
  - Performance otimizada
  - Código limpo e bem organizado

## Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones

## Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projetos/
│       ├── [category]/
│       │   └── [id]/
│       └── [category]/
│           └── page.tsx
├── components/
│   ├── ContactSection.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ImageModal.tsx
│   ├── InstagramFeed.tsx
│   ├── PartnersSection.tsx
│   ├── PillarsSection.tsx
│   ├── ProjectCarousel.tsx
│   ├── ProjectsSection.tsx
│   └── ServicesSection.tsx
├── data/
│   └── projects.ts
```

## Começando

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/krios-landing.git
cd krios-landing
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Configuração

1. **Imagens**: Adicione suas imagens na pasta `public/`:
   - `public/images/` - Imagens gerais
   - `public/projects/` - Imagens de projetos

2. **Projetos**: Atualize os dados dos projetos em:
   - `src/data/projects.ts`

*Todos os dados dos projetos (títulos, descrições, imagens) estão centralizados em `src/data/projects.ts`. Não é necessário editar os componentes para adicionar ou alterar projetos.*

## Responsividade

O site é totalmente responsivo e otimizado para:
- Desktops (1200px+)
- Tablets (768px - 1199px)
- Smartphones (320px - 767px)

## Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/krios-landing)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contribuindo

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## English Version

### Krios Landing Page

A modern and professional landing page for a civil construction company, built with Next.js and Tailwind CSS.

#### Features

- **Modern, Responsive Design**
  - Elegant, professional interface
  - Optimized for all devices
  - Dark theme with glassmorphism effects
  - Smooth animations with Framer Motion

- **Main Sections**
  - Fixed header with navigation
  - Hero section with statistics
  - Company pillars
  - Services offered
  - Project portfolio with carousels
  - Contact section

- **Interactive Portfolio**
  - Carousels by category (Residential, Industrial, Commercial)
  - Dedicated pages for each category
  - Detailed pages for individual projects
  - Image gallery with thumbnails

- **Optimization**
  - SEO optimized
  - Optimized image loading
  - High performance
  - Clean, well-organized code

#### Technologies

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

#### Project Structure

```
src/
├── app/
│   ├── api/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projetos/
│       ├── [category]/
│       │   └── [id]/
│       └── [category]/
│           └── page.tsx
├── components/
│   ├── ContactSection.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ImageModal.tsx
│   ├── InstagramFeed.tsx
│   ├── PartnersSection.tsx
│   ├── PillarsSection.tsx
│   ├── ProjectCarousel.tsx
│   ├── ProjectsSection.tsx
│   └── ServicesSection.tsx
├── data/
│   └── projects.ts
```

#### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/krios-landing.git
   cd krios-landing
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Configuration

1. **Images**: Add your images to the `public/` folder:
   - `public/images/` - General images
   - `public/projects/` - Project images

2. **Projects**: Update project data in:
   - `src/data/projects.ts`

*All project data (titles, descriptions, images) is centralized in `src/data/projects.ts`. You do not need to edit components to add or change projects.*

#### Responsiveness

The site is fully responsive and optimized for:
- Desktops (1200px+)
- Tablets (768px - 1199px)
- Smartphones (320px - 767px)

#### Deploy

The project can be easily deployed on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/krios-landing)

#### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

#### Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
