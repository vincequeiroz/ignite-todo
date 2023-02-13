<p align="center">
    <strong>Aplicativo web de todo list.</strong>
</p>

<p align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/vincequeiroz/ignite-todo">
  <img alt="GitHub" src="https://img.shields.io/github/license/vincequeiroz/ignite-todo">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vincequeiroz/ignite-todo">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/vincequeiroz/ignite-todo?style=social">
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-tecnologias-utilizadas">Tecnologias</a> • 
 <a href="#-instalação-e-uso">Instalação</a> • 
 <a href="#-licença">Licença</a>
</p>

## 💻 Sobre o projeto

Desafio do curso Ignite da Rocketseat - Trilha ReactJS.

### Desafio: Praticando Conceitos

Nesse desafio você vai reforçar os conceitos mais importantes do ReactJS e aprender ainda mais conceitos que serão utilizados em todas as aplicações que você for desenvolver no futuro.

## ☑ Funcionalidades

- [x] Inserir tarefas
  - [x] Inserção com enter
  - [x] Verificação de campo vazio
- [x] Alterar estado da tarefa
  - [x] Marcar como concluído
  - [x] Apagar tarefa
- [x] Responsividade em telas menores
  - [x] Redução do tamanho de fonte
  - [x] Redução do tamanho de elementos
- [x] Navegação total por teclado

## 🔨 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- **[ReactJS](https://reactjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)**
- **[Vitest](https://vitest.dev/)**
- **[Docker](https://www.docker.com/)**

> Veja o arquivo [package.json](https://github.com/vincequeiroz/ignite-todo/blob/main/package.json)

## 🚀 Instalação e uso

### Sem Docker

```bash
# Clone o repositório
git clone https://github.com/vincequeiroz/ignite-todo.git

# Acesse a pasta do projeto
cd ignite-todo

# Instale as dependências
yarn install

# Execute a aplicação
yarn run dev

# O servidor inciará em uma porta aleatória
```

### Com Docker

```bash
# Clone o repositório
git clone https://github.com/vincequeiroz/ignite-todo.git

# Acesse a pasta do projeto
cd ignite-todo

# Instale as dependências
docker compose run --rm node yarn install

# Execute a aplicação
docker compose up

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

## 📝 Licença

<a href="https://opensource.org/licenses/MIT">
    <img alt="GitHub" src="https://img.shields.io/github/license/vincequeiroz/ignite-todo">
</a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
