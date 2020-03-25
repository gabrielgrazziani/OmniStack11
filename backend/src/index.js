const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * metodos HTTP:
 * 
 * GET: Busca no backend
 * POST: Cria no backend
 * PUT: Altera no backend
 * DELETE: Deleta no backend
 */

 /**
  * Tipos de parametor:
  * 
  * Query Params: Parâmetros nomeados na rota após "?" (Filtro, Paginação)
  * Rote Params: Parâmetros utilisados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   *Driver: select * from tabela
   Query Builder: tabela('user').select('*').where()
   */