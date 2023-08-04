const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController');
const sugestao = require("../controllers/emailSugestaoController");

router.post('/admgeral/Contato', sugestao);
router.post('/admgeral/home', admController.AdmLogin);
router.post('/admgeral/CadastroMonitor', admController.cadastroMonitor);
router.post('/admgeral/adicionar_laboratorios', admController.addLab);
router.get('/alunos', admController.buscaTodosOsAlunos);
router.get('/laboratorios', admController.buscaTodosOsLaboratorios);
router.get('/monitores', admController.buscaTodosOsMonitores);
router.delete('/admgeral/DeletarMonitor', admController.delMonitor);
router.delete('/admgeral/DeletarAluno', admController.delAluno);

module.exports = router;