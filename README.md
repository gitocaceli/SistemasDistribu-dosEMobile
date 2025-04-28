# API REST - Produtos e Clientes

API criada com Node.js, Express e MySQL, com estrutura MVC, mas implementada em um único arquivo.

## Endpoints
- **/produtos**
  - GET: Retorna todos os produtos.
  - GET /:id: Retorna um produto específico.
  - POST: Cria um novo produto.
  - PUT /:id: Atualiza um produto.
  - DELETE /:id: Deleta um produto.

- **/clientes**
  - GET: Retorna todos os clientes.
  - GET /:id: Retorna um cliente específico.
  - POST: Cria um novo cliente.
  - PUT /:id: Atualiza um cliente.
  - DELETE /:id: Deleta um cliente.

## Como rodar
1. Instale as dependências:
```bash
npm install
