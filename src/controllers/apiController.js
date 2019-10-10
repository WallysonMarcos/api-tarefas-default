const conexao = require('../config/conexao')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config()

exports.login = (req, res) =>{

  const email = req.body.email
  const senha = req.body.senha

  const query = "SELECT * FROM usuarios WHERE email = ?"

  conexao.query(query,[email], (error,rows) =>{
    if(error){
      res.status(500)
      res.json({"auth": false, "menssage": "Internal Server Error"})
    }else if(rows.length > 0){
      bcrypt.compare(senha, rows[0].senha,(error,resp) =>{        
        if(resp){
          const usuario = rows[0].id
          jwt.sign({usuario}, process.env.SECRET,{expiresIn: 30000}, (err, token) =>{
            res.status(200)
            res.json({"auth":true, "token": token})
          })
        }else{
          res.status(403)
          res.json({"auth": false, "message":"1 E-mail ou senha incorretos","error":error})
        }
      })
    }else{
      res.status(403)
      res.json({"auth": false, "message":"2 E-mail ou senha incorretos","query":query})
    }
  })
}



exports.verifica = (req, res) =>{
  const token = req.header.token

  if(!token){
    res.status(401)
    res.send({"auth": false, "message": "Token em branco"})
  }else{
    jwt.verify(token, process.env.SECRET, (error, decode) =>{
      if(error){
        res.status(403)
        res.send({"auth": false, "message": "Falha de autenticação"})
      }else{
        next()
      }
    })

  }

}