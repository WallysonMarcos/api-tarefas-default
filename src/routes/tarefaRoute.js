const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const apiController = require('../controllers/apiController')

route.get('/',apiController.verifica, tarefaController.listar)
route.get('/:id', tarefaController.listarPorID)
route.post('/', tarefaController.inserir)
route.put('/:id', tarefaController.alterar)

module.exports = route;