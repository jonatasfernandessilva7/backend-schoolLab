//define consts
const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

require("dotenv").config();
const port = process.env.PORT_SERVER|| 5000;

import cors from 'cors';
import morgan from 'morgan';

app.use(cors({
    origin: 'http://localhost:8081'
}));

//configurando engine de views e leitura de json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('tiny'));

//callback routes
const rotasAluno = require('./api/alunoRotas');
app.use('/', rotasAluno);

const rotasAdm = require('./api/admRotas');
app.use('/', rotasAdm);

const rotasMonitor = require('./api/monitorRotas');
app.use('/', rotasMonitor);

//open server
app.listen(port, () => {
    console.log('rodando na porta: ',port);
});