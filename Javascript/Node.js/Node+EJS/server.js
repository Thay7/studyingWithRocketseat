const express = require('express')//renderiza e cria um servidor para mostrar oq eutou construindo no navegador

const app = express()// instanciando o express e guardando na variavel app


app.set("view engine", "ejs")