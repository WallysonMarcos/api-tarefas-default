const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()


app.use(morgan('dev'))
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas', tarefaRoute)


const port = process.env.PORT

app.listen(port, () =>{
  console.log(`Servidor esta rodadno na porta ${port}`)
})
