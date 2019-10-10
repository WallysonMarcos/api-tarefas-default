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
  
  const tarefas = []
  tarefas.push(req.body.descricao)
  tarefas.push(req.body.data)
  tarefas.push(req.body.realizado)
  tarefas.push(req.body.categoria_id)

  console.log(tarefas)
  /*
  const query = "insert into tarefas (descricao, data, realizado, categoria_id) values( ?, ?, ?, ?)"
  conexao.query(query,tarefas, (error,rows) =>{
    if(error){
      res.status(500)
      res.json({"mensage": "Internal Server Error"})
      console.log(error)
    }else{
      res.status(201)
      res.json({"mensage": "Tarefa criada com sucesso", "id": rows.insetID})
    }
  })*/
}


exports.alterar = (req, res) =>{
  const tarefas = []
  tarefas.push(req.body.descricao)
  tarefas.push(req.body.data)
  tarefas.push(req.body.realizado)
  tarefas.push(req.body.categoria_id)
  tarefas.push(req.params.id)

  const query = "UPDATE tarefas SET descricao = ?, data = ?, realizado = ?, categoria_id = ? WHERE id = ?"

  conexao.query(query,tarefas,(error,rows) =>{
    if(error){
      res.status(500)
      res.json({"mensage": "Internal Server Error"})
      console.log(error)
    }else if(rows.affectedRows > 0){
      res.status(200)
      res.json({"mensage": "Nenhuma tarefa encontrada"})
    }else{
      res.status(404)
      res.json({"mensage": "Nenhuma tarefa encontrada"})
    }
  })
}