// Importa o framework Express, que é usado para criar servidores web em Node.js
const express = require('express');

// Controllers
// Importa o controller de vagas que contém as funções de controlar
const vagaController = require('./controllers/vaga.controller');

// Cria uma instância da aplicação Express (nosso servidor web)
const app = express();

// Define EJS como engine de template (para renderizar páginas HTML dinâmicas)
app.set('view engine', 'ejs');
// Define o diretório onde ficam os templates (arquivos .ejs)
app.set('views', './views');

// Cria uma rota GET que responde quando alguém acessa '/vagas'
app.get('/vagas', vagaController.listarVagas);

// Inicia o servidor na porta 3000 (localhost:3000)
app.listen(3000, () => {
  // Exibe uma mensagem no console confirmando que o servidor está rodando
  console.log('Servidor rodando em http://localhost:3000');
});