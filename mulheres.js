const express = require("express")
const router = express.Router()
const porta = 3333
const app = express()

const mulheres = [
    {
        nome: "Adriana Gioielli",
        image: "https://avatars.githubusercontent.com/u/17130402?v=4",
        minibio: "Desenvolvedora e Kendoka aspirante"

    },
    {
        nome: "Simara Conceição",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Desenvolvedora e Instrutora"
    },
    {
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "Fundadora da Programaria"
    },
    {
        nome: "Nina da Hora",
        imagem: "https://bit.ly/3FKpFaz",
        minibio: "Hackear Antirracista"
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)

}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)