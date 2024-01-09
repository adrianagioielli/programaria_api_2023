const express = require("express")
const router = express.Router()
const porta = 3333
const app = express()

function mostraMulher(request, response){
    response.json({
        nome: "Adriana Gioielli",
        image: "",
        minibio: "desenvolvedora e kendoka aspirante"
    })

}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)