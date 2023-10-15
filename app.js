const express = require("express")
const path = require("path")
const { fileURLToPath } = require("url")
const bodyParser = require("body-parser")
const table = require("./backend/models/table")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"))

app.post("/enviamsg", function (req, res) {
  table
    .create({
      nome: req.body.nome,
      email: req.body.email,
      msg: req.body.msg,
    })
    .then(function () {
      res.redirect("/obrigado")
    })
    .catch(function (erro) {
      console.log("Erro ao enviar dados.")
    })
})

app.get("/lista-feedback", function (req, res) {
  const dados = table
    .findAll()
    .then(function (dado) {
      res.sendFile("./frontend/pages/lista-feedback"), { dado: dado }
    })
    .catch(function (error) {
      console.log("Erro!" + error)
    })
})
