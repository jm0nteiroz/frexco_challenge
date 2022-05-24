const estoque = require("../models/estoque");
const { response } = require("express");
const {v4: uuid} = require("uuid");

module.exports = {
   async index(request, response){
        try {
            const produtos = await estoque.find();
            return response.status(200).json( { produtos });
        } 
        catch (err){
                response.status(500).json({error: err.menssage});

        }
    },

    async store(request, response){
        const {nome, quantidade} = request.body;

        if(!nome || !quantidade){
            return response.status(400).json({error: "Faltando Nome ou quantidade"});
        }
        const produto = new estoque({
            _id: uuid(),
            nome,
            quantidade
        })

        try{
            await produto.save();
            return response.status(201).json({menssage: "Produto adicionado com sucesso!"});
        }catch (err){
            response.status(400).json({ error: err.message});
        }
    },
async update(request, response){
    const { nome, quantidade} = request.body;

    if(!nome && !quantidade){
        return response
        .status(400)
        .json({error: "Voce deve informar novo nome ou novo quantidade"});
    }
    if(nome) response.produtos.nome = nome;
    if(quantidade) response.produtos.quantidade = quantidade;

    try{
        await response.produtos.save();
        return response.status(200).json({message: "Produto atualizado com sucesso!"});


    }catch (err){
        response.status(500).json({error: err.message});
    }


},
 async delete(request, response){
     try{
         await response.produtos.remove();
         return response.status(200).json({ message: "Produto deletado com Sucesso!"});

     }catch(err){
         return response.status(500).json({ error: err.message });
     }
 }

};