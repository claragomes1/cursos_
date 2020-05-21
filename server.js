//Express é um micro-framework que vai nos ajudar a trabalhar com rotas e views
//Rotas: endereços com as URL's que o usuario vai poder acessar
//Views: formas de vizualização
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
//Permitindo que eu possa enviar dados para a minha aplicação e formato de json
app.use(express.json());
app.use(cors());

/*Model é como se fosse uma tabela no banco de dados*/

//Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useUnifiedTopology: true, useNewUrlParser: true }
);
requireDir('./src/models');


const Product = mongoose.model('Product'); 

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);