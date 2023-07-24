const alunosServices = require("../services/alunosServices");

const alunosController = {
  buscar: async (req, res) => {
    const alunos = alunosServices.buscar();
    res.send(alunos);
  },

  buscarPeloId: (req, res) => {
    
    const alunos = alunosServices.buscarPeloId(req.params.id);
    res.send(alunos);
  },

  salvar: (req, res) => {
    const aluno = alunosServices.cadastrar(req.body)
    res.send(aluno);
  },
};

module.exports = alunosController;