const { validate: isUUID } = require("uuid");
const estoque = require("../models/estoque");

module.exports = {
    async validateId(request, response, next){
        const { id } = request.params;

        if(!isUUID(id)){
            response.status(400).json({error:"id invalido"});

        }
        try {
            const produtos = await estoque.findById(id);
            response.produtos = produtos;
            if(!produtos){
                return response.status(404).json({ error: "Produto nao encontrado"});
            }
        } catch(err){
            return response.status(500).json({error: err.message});
        }
    next();
    },
};