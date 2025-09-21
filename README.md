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

#### Frontend

1. Acesse a pasta `frontend`.
2. Instale as dependências:
     ```bash
     npm install
     ```
3. Inicie a aplicação:
     ```bash
     npm start
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
│   ├── src/
│   └── ...
└── README.md
```

### Requisitos

- Node.js >= 18
- npm >= 9

### Observações

- `TODO`: Documentar o código e explicar minhas decisões de arquitetura.
- `TODO`: Implementar testes unitários e de integração.
- `TODO`: adicionar função frontend de mudança de cor para saldo negativo
- `TODO`: Criar Dockerfile para containerização do backend e frontend
- `TODO`: adicionar paginação na listagem de voos
- `TODO`: Melhorar a responsividade do frontend
- `TODO`: implementar formatação de fontes e tamanhos de texto conforme o design além das cores
- `TODO`: Página de detalhes do voo incompleta
- `TODO`: Melhorar tratamentos de erros no backend e frontend

### Licença

Este projeto é apenas para fins de avaliação técnica.