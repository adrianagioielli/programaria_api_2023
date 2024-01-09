const express = require("express")
const router = express.Router()
const porta = 3333
const app = express()

//funcao ligada ao verbo GET; ela sempre pede os parâmetros request e response
function mostraOla(request, response){
    response.send("Olá, mundo!")
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/ola", mostraOla))
app.listen(porta, mostraPorta)