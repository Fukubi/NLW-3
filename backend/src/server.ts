import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletar uma informação

// Query Params: http://localhost:3333/users/search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: { "nome": "Exemplo", "senha": "12345" }



app.listen(3333);

// Driver nativo, Driver builder, ORM
// Driver nativo (Escreve a query, ex: SELECT * FROM table WHERE name = Diego)
// Driver builder (Escreve a query mas com JavaScript, ex: Knex.js (knex(table).select('*').where('name', 'Diego')))
// ORM (Classe que sinboliza uma tabela, abstração máxima (Object Relational Mapping)