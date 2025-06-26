// Função que simula a busca de vagas em um banco de dados
function listarVagas() {

  // Array com dados simulados de vagas de emprego
  const vagas = [

    // Primeira vaga: desenvolvedor front-end
    { id: 1, titulo: "Dev Front-End", empresa: "TechX", local: "São Paulo" },
    // Segunda vaga: desenvolvedor back-end
    { id: 2, titulo: "Dev Back-End", empresa: "InovaTI", local: "Remoto" },

  ];

  // Retorna o array de vagas para quem chamar esta função
  return vagas;
}

// Exporta a função para que outros arquivos possam usar
module.exports = {
  listarVagas
};