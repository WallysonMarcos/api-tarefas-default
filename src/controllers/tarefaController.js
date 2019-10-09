const conexao = require('../config/conexao')

exports.listar = (req, res) =>{
  const query = "SELECT * FROM tarefas"
  conexao.query(query,(error,rows) =>{
    if(error){
      res.status(500)
      res.json({"mensage": "Internal Server Error"})
      console.log(error)
    }else if(rows.length > 0){
      res.status(200)
      res.json(rows)
    }else{
      res.status(404)
      res.json({"mensage": "Nenhuma tarefa encontrada"})
    }
  })
}


exports.listarPorID = (req, res ) =>{
  const id = req.params.id
  const query = "SELECT * FROM tarefas WHERE id = ?"
  conexao.query(query,[id], (error,rows) =>{
    if(error){
      res.status(500)
      res.json({"mensage": "Internal Server Error"})
      console.log(error)
    }else if(rows.length > 0){
      res.status(200)
      res.json(rows)
    }else{
      res.status(404)
      res.json({"mensage": "Nenhuma tarefa encontrada"})
    }
  })
}


exports.inserir = (req, res) =>{
  
  const tarefa = {}

  tarefa.descricao = req.body.descricao
  tarefa.data = req.body.data
  tarefa.realizado = req.body.realizado
  tarefa.categoria_id = req.body.categoria_id

  const query = "insert into tarefas (descricao, data, realizado, categoria_id) values( ?, ?, ?, ?)"
  conexao.query(query,[tarefa.descricao, tarefa.data, tarefa.realizado, tarefa.categoria_id], (error,rows) =>{
    if(error){
      res.status(500)
      res.json({"mensage": "Internal Server Error"})
      console.log(error)
    }else{
      res.status(201)
      res.json({"mensage": "Tarefa criada com sucesso", "id": rows.insetID})
    }
  })
}