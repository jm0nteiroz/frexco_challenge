const mongoose = require("mongoose");

const estoqueSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    quantidade:{
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model("estoque", estoqueSchema);