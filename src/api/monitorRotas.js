const express = require('express');
const router = express.Router();
const monitorController = require('../controllers/monitorController');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");

router.post('/esqueceuASenha', recuperandoSenha);
router.post('/monitor/Contato', sugestao);
router.post('/Monitor/login/home', monitorController.LoginMonitor);

module.exports = router;