# Project Champion API

Esta é uma API RESTful para gerenciar uma coleção de dados de jogadores de futebol. A aplicação é construída com Node.js, Express e TypeScript, e utiliza um banco de dados em memória para persistência dos dados durante a execução.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para construção de APIs web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **tsx**: Executa e recarrega arquivos TypeScript em tempo real sem a necessidade de compilação prévia.
- **CORS**: Habilitado para permitir requisições de origens específicas.

## Como Começar

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 22.x ou superior recomendada)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### Instalação

1. Clone o repositório (ou use a sua pasta local):
   ```bash
   # git clone https://github.com/seu-usuario/project-champion.git
   # cd project-champion
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

### Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento (com recarregamento automático ao salvar alterações), execute:

```bash
npm run start:watch
```

A API estará disponível em `http://localhost:3000/api`.

## Endpoints da API

A URL base para todos os endpoints é `/api`.

---

### Jogadores (`/players`)

#### 1. Listar todos os jogadores

- **Método**: `GET`
- **URL**: `/players`
- **Descrição**: Retorna uma lista com todos os jogadores cadastrados.
- **Exemplo (cURL)**:
  ```bash
  curl http://localhost:3000/api/players
  ```

#### 2. Buscar jogador por ID

- **Método**: `GET`
- **URL**: `/players/:id`
- **Descrição**: Retorna os dados de um jogador específico com base no seu ID.
- **Exemplo (cURL)**:
  ```bash
  curl http://localhost:3000/api/players/1
  ```

#### 3. Criar novo jogador

- **Método**: `POST`
- **URL**: `/players`
- **Descrição**: Adiciona um novo jogador à base de dados. O ID é gerado automaticamente.
- **Corpo da Requisição (JSON)**:
  ```json
  {
    "name": "Neymar Jr",
    "club": "Al-Hilal",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 89, "Pace": 87, "Shooting": 83,
      "Passing": 85, "Dribbling": 91, "Defending": 37, "Physical": 59
    }
  }
  ```

#### 4. Atualizar estatísticas de um jogador

- **Método**: `PATCH`
- **URL**: `/players/:id`
- **Descrição**: Atualiza o objeto de estatísticas de um jogador existente.
- **Corpo da Requisição (JSON)**:
  ```json
  {
    "Overall": 94, "Pace": 86, "Shooting": 95,
    "Passing": 92, "Dribbling": 96, "Defending": 40, "Physical": 68
  }
  ```

#### 5. Deletar um jogador

- **Método**: `DELETE`
- **URL**: `/players/:id`
- **Descrição**: Remove um jogador da base de dados.

---

### Clubes (`/clubs`)

#### 1. Listar todos os clubes

- **Método**: `GET`
- **URL**: `/clubs`
- **Descrição**: Retorna uma lista com os nomes de todos os clubes únicos existentes na base de dados.
- **Exemplo (cURL)**:
  ```bash
  curl http://localhost:3000/api/clubs
  ```