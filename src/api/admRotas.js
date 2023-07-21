const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController');
const sugestao = require("../controllers/emailSugestaoController");

router.post('/admgeral/Contato', sugestao);

router.post('/admgeral/Adm/home', admController.AdmLogin);

router.post('/admgeral/CadastroMonitor', admController.cadastroMonitor);

router.get('/alunos', admController.buscaTodosOsAlunos)

//rotas del adm
router.delete('/admgeral/DeletarMonitor', admController.delMonitor);

router.delete('/admgeral/DeletarAluno', admController.delAluno);

module.exports = router;