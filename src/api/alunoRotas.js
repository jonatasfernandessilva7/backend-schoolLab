const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunoController');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");

const alunoController = new AlunoController();

router.post('/esqueceuASenha', recuperandoSenha);
router.post('/aluno/cadastro/login', alunoController.createAluno);
router.post('/aluno/login/home', alunoController.LoginAluno);
router.post('/aluno/Contato', sugestao);
router.put('/aluno/perfil', alunoController.updateAluno);
router.put('/aluno/recuperacao/inserirNovaSenha', alunoController.updateAlunoSenha);

module.exports = router;