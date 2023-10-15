const express = require("express")
const path = require("path")
const { fileURLToPath } = require("url")
const bodyParser = require("body-parser")
const table = require("./backend/models/table")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"))

app.use(express.static(__dirname + "/frontend/public"))

app.get("/", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages/index.html")
)

app.get("./slipknot.html", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages./slipknot.html")
)

app.get("./contact.html", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages./contact.html")
)

app.get("/obrigado", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages/obrigado.html")
)

app.get("./soad.html", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages./soad.html")
)

app.get("./feedback.html", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages./feedback.html")
)

app.get("./acdc.html", (req, res) =>
  res.sendFile(__dirname + "/frontend/pages./acdc.html")
)

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
