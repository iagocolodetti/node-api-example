# node-api-example

Exemplo simples de CRUD API utilizando banco de dados MySQL com Node.js

Create -> POST /contatos | Body: { "nome": "...", "telefone": "...", "email": "...@..." }
Read -> GET /contatos
Update -> PUT /contatos/id | Body: { "nome": "...", "telefone": "...", "email": "...@..." }
Delete -> DELETE /contatos/id