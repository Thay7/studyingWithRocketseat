const express = require('express')//cria um servidor para mostrar oq eutou construindo no navegador

const app = express()// instanciando o express e guardando na variavel app


app.set("view engine", "ejs")//falando pro express que usarei o ejs como ferramente para renderizar o html


app.get("/", function (req, res) { //criando rota referente ao nome do meu site "/"
    res.render("index") //vou dar de resposta para essa rota: renderizar o index
}) 

app.get("/sobre", function (req, res) { //rota para pagina about
    res.render("about")
})

app.listen(8080) //app carrega tudo do express e o listen é uma funçao do express que fica ouvindo uma porta, no caso a minha é 8080
//quando colocar no navegador  localhost:8080 o app irá rodar

console.log("Rodando")