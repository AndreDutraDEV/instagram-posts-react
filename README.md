# 📸 (instagram-posts-react) Mini Rede Social - Feed de Publicações com Next.js

Tela de posts similar ao instagram feito em React para fins didáticos.
Este projeto é uma simulação de um **feed de rede social** desenvolvido com **Next.js 13+**, utilizando a nova abordagem de **App Router**, componentes **client-side** e imagens otimizadas com o `next/image`.

## 🚀 Funcionalidades

- 📄 **Renderização de Posts Dinâmicos**
  - Geração de múltiplos posts com imagem, nome de usuário, avatar, descrição e número de curtidas.
  - As curtidas são geradas dinamicamente no cliente para simular interações reais.

- ❤️ **Interação com os Posts**
  - Curtir/Descurtir um post.
  - Comentar, salvar e compartilhar (com ícones).
  - Seguir/Deixar de seguir um usuário.

- 👤 **Cabeçalho com Informações do Usuário**
  - Avatar com borda personalizada.
  - Botão de seguir com mudança de estado.
  - Botão de ações adicionais (menu de opções).

- 🖼️ **Suporte a Imagens Otimizadas**
  - Utilização do componente `Image` do Next.js com carregamento otimizado e responsivo.

- 🎯 **Estilo Responsivo e Intuitivo**
  - Layout fluido com suporte a rolagem vertical.
  - Interface inspirada em redes sociais modernas.

## 🧱 Tecnologias Utilizadas

- [Next.js 13+ (App Router)](https://nextjs.org/)
- React (com `useState` e `useEffect`)
- TypeScript
- CSS inline com abordagem modular e responsiva
- Geradores de imagem aleatória:
  - [Pravatar](https://i.pravatar.cc/) para avatares
  - [Picsum Photos](https://picsum.photos/) para imagens dos posts

## ⚠️ Observações Técnicas

- Toda a geração de dados dinâmicos como curtidas é feita **no lado do cliente**, para evitar erros de **"hydration mismatch"** durante a renderização SSR.
- O componente principal está marcado com `"use client"` para garantir que a lógica interativa funcione corretamente.

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse o diretório
cd nome-do-repositorio

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
