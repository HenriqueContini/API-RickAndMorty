<h1 align="center">API do Ricky and Morty</h1>

### 🖥️ Projeto

API criada para os estudos de back-end, utilizando Node, Express, Axios e Jest, usando como base a <a href="https://rickandmortyapi.com/documentation/">Ricky and Morty API</a>.

Nesta API, é possível buscar por todos os personagens ou por IDs específicos. Foi utilizado boas práticas de tratamento de erros, como mensagens padronizadas e status HTTP semânticos.

### ⚙️ Tecnologias

- Node.js
- TypeScript
- Express
- Axios
- Jest
- Supertest

## 🏴󠁶󠁵󠁭󠁡󠁰󠁿 Endpoints

### Lista de personagens

#### Request
`GET /character/`
#### Response
```
{
  "error": false,
  "info": {
    "count": 826,
    "pages": 42,
    "next": "http://localhost:3000/character?page=2",
    "prev": null
  },
  "data": [...]
}
```
### Lista de personagens com paginação

#### Request
`GET /character?page=3/`
#### Response
```
{
  "error": false,
  "info": {
    "count": 826,
    "pages": 42,
    "next": "http://localhost:3000/character?page=4",
    "prev": "http://localhost:3000/character?page=2"
  },
  "data": [...]
}

```

### Personagem por ID

#### Request
`GET /character/1/`
#### Response
```
{
  "error": false,
  "data": {
    "id": 1,
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
    "url": "https://rickandmortyapi.com/api/character/1"
  }
}

```

## 🏃‍♂️ Rodar projeto

1. Primeiro, será necessário baixar o projeto. Para isso, basta rodar o comando abaixo dentro da pasta que desejar:

```
git clone https://github.com/HenriqueContini/API-RickAndMorty.git
```

2. Dentro da pasta, será necessário baixar as dependências do projeto por meio do comando:

```
npm install
```

3. Depois, basta rodar o projeto com:

```
npm run dev
```

4. Testes:

```
npm run test
```
