const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");

router.post('/esqueceuASenha', recuperandoSenha);

//rota após o cadastro estar feito
router.post('/aluno/cadastro/login', alunoController.createAluno);

//rota para pagina home após fazer login
router.post('/aluno/login/home', alunoController.LoginAluno);

router.post('/aluno/Contato', sugestao);

//rotas put Aluno

//rota para fazer update dos dados do perfil
router.put('/aluno/perfil', alunoController.updateAluno);

router.put('/aluno/recuperacao/inserirNovaSenha', alunoController.updateAlunoSenha);

module.exports = router;