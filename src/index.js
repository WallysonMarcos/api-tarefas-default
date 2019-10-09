const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
//const YAWML = require('yamljs')
//const swaggerUi = require('swagger-ui-express')

//logs
//app.use(morgan("combined"))

//DOcumentação API
//const sw = YAWML.load('./docs/swagger.yaml')
//app.use('/api/v1/docs', swaggerUi.serve, sw.)

app.use(morgan('dev'))
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas', tarefaRoute)


const port = process.env.PORT

app.listen(port, () =>{
  console.log(`Servidor esta rodadno na porta ${port}`)
})
