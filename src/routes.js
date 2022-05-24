const express = require("express");
const { default: mongoose } = require("mongoose");
const routes = express.Router();
const estoqueController = require("./controllers/estoqueController");
const estoqueMiddleware = require("./middlewares/estoqueMiddleware");

//rota de teste em tela.
//routes.get("/", (request, response) => response.send("Hello Word!"));
routes.get("/produtos", estoqueController.index);
routes.post("/produtos", estoqueController.store);
routes.put("/produtos/:id", estoqueMiddleware.validateId, estoqueController.update);
routes.delete("/produtos/:id", estoqueMiddleware.validateId, estoqueController.delete);

module.exports = routes;