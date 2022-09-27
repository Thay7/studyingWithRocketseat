const express = require('express')//chamando o express que cria um servidor para mostrar oq eutou construindo no navegador

const app = express()// instanciando o express e guardando na variavel app


app.set("view engine", "ejs")//falando pro express que usarei o ejs como ferramente para renderizar o html


app.get("/", function (req, res) { //criando rota referente ao nome do meu site "/"
    const items = [
        {
            title: "D",
             message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "EJS usa Javascrip para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "Amorzinho"
        },
        {
            title: "I",
            message: "install ejs"
        },
        {
            title: "S",
            message: "Simples"
        }
    ]

    res.render("pages/index", {
        qualitys: items, 
    }) //vou dar de resposta para essa rota: renderizar o index
}) 

app.get("/sobre", function (req, res) { //rota para pagina about
    res.render("pages/about")
})

app.listen(8080) //app carrega tudo do express e o listen é uma funçao do express que fica ouvindo uma porta, no caso a minha é 8080
//quando colocar no navegador  localhost:8080 o app irá rodar

console.log("Rodando")

//criar pasta chamada views e colocar o index nessa pasta