const mongoose = require('mongoose')

async function conectaBancoDeDados(){
    try{
        console.log("Conexão com banco de dados iniciada...")
        await mongoose.connect('mongodb+srv://adrianalvescp:dGYCtioH4i0J80RT@clustermulheres.sqh3w1l.mongodb.net/?retryWrites=true&w=majority')
        console.log('Conexão com banco de dados realizada!')
    }catch(erro){
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados