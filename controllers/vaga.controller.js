// Importa o modelo de vagas para acessar os dados
const vagaModel = require('../models/vaga.model');

// Função controladora que gerencia a listagem de vagas
function listarVagas(request, response) {

  // Chama função "listar" do modelo de vagas para obter a lista de vagas
  const vagas = vagaModel.listarVagas();
  
  // Envia a lista de vagas como resposta em formato JSON para o cliente
  // response.json(vagas);

  // Renderiza a página 'listar-vagas' passando a lista de vagas para o template
  response.render('vagas.ejs', { vagas });
}

// Exporta a função para que as rotas possam usar este controller
module.exports = {
  listarVagas
};