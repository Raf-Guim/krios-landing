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
│   ├── projetos/
│   │   ├── [category]/
│   │   │   └── [id]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PillarsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── ContactSection.tsx
│   └── ProjectCarousel.tsx
└── styles/
    └── globals.css
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
   - `src/components/ProjectsSection.tsx`
   - `src/app/projetos/[category]/page.tsx`
   - `src/app/projetos/[category]/[id]/page.tsx`

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
