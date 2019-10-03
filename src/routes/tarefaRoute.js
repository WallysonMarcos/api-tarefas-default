const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')

route.get('/',(res, req) =>{
  res.Json({
    "mensagem":"Listando todos usuários"
  })
})
module.exports = route