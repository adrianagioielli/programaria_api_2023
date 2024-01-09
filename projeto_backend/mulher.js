const express = require("express")
const router = express.Router()
const porta = 3333
const app = express()

function mostraMulher(request, response){
    response.json({
        nome: "Adriana Gioielli",
        image: "https://avatars.githubusercontent.com/u/17130402?v=4",
        minibio: "desenvolvedora e kendoka aspirante"
    })

}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)