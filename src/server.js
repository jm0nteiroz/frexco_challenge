require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const mongoose  = require("mongoose");
const connectToDataBase = require("./database");

connectToDataBase();

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Backend Start!");
});
