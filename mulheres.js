const express = require("express")
const router = express.Router()
const { v4: uuidv4} = require('uuid')
const conectaBancoDeDados = require("./bancoDeDados")
conectaBancoDeDados()
const porta = 3333
const app = express()
app.use(express.json())

const mulheres = [
    {
        id: '1',
        nome: "Adriana Gioielli",
        image: "https://avatars.githubusercontent.com/u/17130402?v=4",
        minibio: "Desenvolvedora e Kendoka aspirante"

    },
    {
        id: '2',
        nome: "Simara Conceição",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Desenvolvedora e Instrutora"
    },
    {
        id: '3',
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "Fundadora da Programaria"
    },
    {
        id: '4',
        nome: "Nina da Hora",
        imagem: "https://bit.ly/3FKpFaz",
        minibio: "Hackear Antirracista"
    },
    {
        id: '5',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]

//GET
function mostraMulheres(request, response){
    response.json(mulheres)

}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
    }
    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontraMulher)
    if(request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }
    if(request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }
    if(request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }
    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response){
    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)
    response.json(mulheresQueFicam)
}

//funcao da porta
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

//rota GET mulheres - lista
app.use(router.get("/mulheres", mostraMulheres))
//rota POST mulheres - cria insercao
app.use(router.post('/mulheres', criaMulher))
//rota PATCH mulheres - edita 
app.use(router.patch('/mulheres/:id', corrigeMulher))
// rota DELETE mulher
app.use(router.delete('/mulheres/:id', deletaMulher))
//rota da porta
app.listen(porta, mostraPorta)