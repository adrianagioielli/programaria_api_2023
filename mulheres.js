const express = require("express")
const router = express.Router()
//const { v4: uuidv4} = require('uuid')
//const mulheres -> não lembro mais como estava essa const pra chamar nas funcoes dos verbos
const porta = 3333
const app = express()
app.use(express.json())
const conectaBancoDeDados = require("./bancoDeDados")
conectaBancoDeDados()
const Mulher = require('./mulherModel')
//pacote cors para acesso da api no frontend
const cors = require('cors')
app.use(cors())

//GET
async function mostraMulheres(request, response){
    try{
        //a função find() é abstração do BD
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
    }catch(erro){
        console.log(erro)

    }

}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try{
        //save() é a abstração do mongoose para salvar
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){
        console.log(erro)
    }

    /*bloco para criaar mulher sem conexao com banco de dados
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)
    response.json(mulheres)
    */
}

//PATCH
async function corrigeMulher(request, response){
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao
        }
        const mulherAtualizadaNoBD = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBD)
    }catch(erro){
        consolo.log(erro)
    }

    /* bloco para corrigir cadastro sem conexão com banco de dados
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
    response.json(mulheres)*/
}

//DELETE
async function deletaMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: "Mulher deletada com sucesso!"})
    }catch(erro){
        console.log(erro)
    }
    
    /*bloco para deletar sem conexão com banco de dados
    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id){
            return mulher
        }
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)
    response.json(mulheresQueFicam)*/
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