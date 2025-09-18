# Jogo da Velha - React

Um jogo da velha completo desenvolvido com React e React Bootstrap, seguindo o tutorial oficial do React.

## 🚀 Características

- ✅ Desenvolvido com React 19.1.0
- ✅ Interface responsiva com React Bootstrap
- ✅ Componentes organizados na pasta `src/components`
- ✅ Histórico de jogadas com navegação
- ✅ Detecção de vencedor e empate
- ✅ Botão para reiniciar o jogo
- ✅ Compatível com npm 10.9.3
- ✅ Pronto para deploy no Vercel

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Game.jsx      # Componente principal do jogo
│   ├── Board.jsx     # Tabuleiro do jogo
│   └── Square.jsx    # Quadrado individual
├── App.jsx           # Componente raiz (importa apenas Game)
├── App.css           # Estilos globais
└── main.jsx          # Ponto de entrada
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm 10.9.3 ou superior

### Passos para executar localmente

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd jogo-da-velha
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

## 🏗️ Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🚀 Deploy no Vercel

### Opção 1: Deploy via CLI do Vercel

1. Instale o Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login no Vercel:
```bash
vercel login
```

3. Execute o deploy:
```bash
vercel
```

### Opção 2: Deploy via GitHub

1. Faça push do código para um repositório no GitHub
2. Conecte o repositório no dashboard do Vercel
3. O deploy será automático a cada push

### Configuração do Vercel

O projeto já inclui um arquivo `vercel.json` com as configurações necessárias:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

## 🎮 Como Jogar

1. O jogo começa com o jogador X
2. Clique em qualquer quadrado vazio para fazer sua jogada
3. Os jogadores alternam entre X e O
4. O primeiro a conseguir três símbolos em linha (horizontal, vertical ou diagonal) vence
5. Use o histórico de jogadas para voltar a qualquer momento anterior
6. Clique em "Novo Jogo" para reiniciar

## 🛠️ Tecnologias Utilizadas

- **React** 19.1.0 - Biblioteca JavaScript para interfaces
- **React Bootstrap** 2.10.10 - Componentes de UI
- **Bootstrap** 5.3.8 - Framework CSS
- **Vite** 6.3.5 - Build tool e dev server
- **Tailwind CSS** 4.1.7 - Framework CSS utilitário

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.

