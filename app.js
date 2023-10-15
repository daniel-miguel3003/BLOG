const express = require('express');
const path = require('path');
const { fileURLToPath } = require('url');
const bodyParser = require('body-parser');
const table = require('./models/table');
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => 
	console.log('Servidor iniciado na porta 3000')
);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => 
res.sendFile(__dirname + '/views/index.html')
);

app.get('/slipknot', (req, res) => 
res.sendFile(__dirname + '/views/slipknot.html')
);

app.get('/contact', (req, res) => 
res.sendFile(__dirname + '/views/contact.html')
);

app.get('/obrigado', (req, res) => 
res.sendFile(__dirname + '/views/obrigado.html')
);

app.get('/soad', (req, res) => 
res.sendFile(__dirname + '/views/soad.html')
);

app.get('/feedkback', (req, res) => 
res.sendFile(__dirname + '/views/feedkback.html')
);

app.get('/acdc', (req, res) => 
res.sendFile(__dirname + '/views/acdc.html')
);


app.post('/enviamsg', function(req, res){
	table.create({
		nome: req.body.nome,
		email: req.body.email,
		msg: req.body.msg
	}).then(function(){
		res.redirect('/obrigado')
	}).catch(function(erro){
		console.log("Erro ao enviar dados.")
	})


})

app.get('/lista-feedback', function(req, res){
	const dados = table.findAll().then(function(dado){
		res.sendFile('/views/lista-feedback'), {dado : dado}
	}).catch(function(error){
		console.log("Erro!" + error)
	})
	
}
)
