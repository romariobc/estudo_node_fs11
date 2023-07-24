const express = require('express');
const alunosController = require('../controllers/alunosController');

const router = express.Router();

router.get('/alunos', alunosController.buscar)
router.post('/alunos', alunosController.salvar)
router.get('/alunos/:id', alunosController.buscarPeloId)

module.exports = router