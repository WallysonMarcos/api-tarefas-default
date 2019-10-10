const express = require('express')
const route = express.Router()
const apiControler = require('../controllers/apiController')

route.post('/login', apiControler.login)

module.exports = route