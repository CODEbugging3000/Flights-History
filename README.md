# flight-history

## Desafio Técnico Pilops

Este projeto consiste em uma aplicação para exibir o histórico de voos, conforme especificado no [desafio técnico Pilops](https://www.notion.so/Teste-t-cnico-Pilops-26a33f92991a8039ab43ec9b2c2a08da).

### Objetivo

Construir uma solução composta por:

- **Backend em Node.js**: expõe os dados de voos via API REST, utilizando um arquivo JSON como fonte.
- **Frontend em React**: consome a API e apresenta as informações em duas telas:
  - Lista de voos
  - Detalhes do voo

O layout das telas deve seguir o modelo fornecido no Figma.

### Tecnologias Utilizadas

- **Backend**:
  - Node.js com Express
  - TypeScript
  - Cors
  - Dotenv
  - Nodemon (para desenvolvimento)
- **Frontend**:
  - React com Next.js
  - TypeScript

### Requisitos

- Node.js >= 18
- npm >= 9


### Como rodar o projeto

#### Backend

1. Acesse a pasta `backend`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
4. A API estará disponível em `http://localhost:4000/flights`.

- A Api tem um sistema de paginação padrão de 5 objetos para requisições sem parâmetros. Para adicionar parâmetros, utilize a estrutura a seguir:
  `http://localhost:4000/flights?page={number}&limit={number}`

#### Frontend

1. Acesse a pasta `frontend`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm run dev
   ```
   ou
   ```bash
   pnpm dev
   ```
4. Acesse `http://localhost:3000` no navegador.

### Estrutura do Projeto

```
flight-history/
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── .env
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   │   └── config.ts
│   │   ├── controllers/
│   │   │   └── historyController.ts
│   │   ├── db/
│   │   │   ├── dataSource.ts
│   │   │   ├── dbMethods.ts
│   │   │   └── flightHistory.json
│   │   ├── middlewares/
│   │   ├── routes/
│   │   │   └── index.ts
│   │   ├── service/
│   │   │   └── flightService.ts
│   │   └── types/
│   │       └── flight.ts
├── frontend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── public/
│   │   └── ...
│   └── src/
│       ├── app/
│       │   └── page.tsx
│       ├── components/
│       │   ├── box-flight-preview/
│       │   │   └── index.tsx
│       │   ├── date-info/
│       │   │   └── index.tsx
│       │   ├── flight-detail/
│       │   │   └── index.tsx
│       │   ├── pagination/
│       │   │   └── index.tsx
│       │   └── registration-info/
│       │       └── index.tsx
│       ├── lib/
│       │   └── api.ts
│       ├── styles/
│       │   └── globals.css
│       ├── types/
│       │   └── flight.ts
│       ├── .env.development
│       └── .env.production
└── README.md
```

### Decisões de Arquitetura de pastas e arquivos

Decidi como padrão para o `backend`, simular um serviço de baco de dados em uma pasta `/db` onde é exportado as funções de consultas e filtros simulando um banco de dados/repositories. Além de separar também:

- `config` para configurações gerais;
- `controllers` para os controladores;
- `routes` para separar rotas e endpoints;
- `service` para lógica de negócio;
- `types` para tipagem;

No `frontend`, optei por uma estrutura mais simples, com a pasta `components` para os componentes reutilizáveis, `lib` para funções utilitárias como a API, `types` para tipagem. Optaria por uma pasta `styles` para os estilos globais porém pelo tamanho do projeto e simplicidade optei por deixar o padrão do create next-app@latest.

### Observações

- Utilizei `TypeScript` para garantir tipagem estática e maior segurança no código.

- Para entrega do MVP no prazo, optei por não implementar testes automatizados, mas reconheço a importância deles para garantir a qualidade do código.

- A paginação foi implementada no backend para otimizar a performance e evitar sobrecarga de dados na resposta da API.

### Possíveis melhorias futuras 

- `TODO`: Documentar o código e explicar minhas decisões de arquitetura.

- `TODO`: Implementar testes unitários e de integração.

- `TODO`: Criar Dockerfile e compose para containerização do backend e frontend

- `TODO`: Melhorar tratamentos de erros no backend e frontend

### Licença

Este projeto é apenas para fins de avaliação técnica.