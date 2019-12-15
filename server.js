const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//primeira rota
const app = express();

//permite o envio de dados no formato JSON
app.use(express.json());

//importando o cors
app.use(cors());

//iniciando o DB em maquina virtual local
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

requireDir('./src/models');


//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);