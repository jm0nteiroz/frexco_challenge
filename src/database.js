const mongoose = require("mongoose");

function connectToDataBase() {
    mongoose.connect(
 process.env.DATABASE_URL, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on("error", (error)=> console.error(error));
db.once("open", () => console.log("DataBase Connected!"));
};

module.exports = connectToDataBase;