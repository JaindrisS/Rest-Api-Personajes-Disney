const dotenv = require("dotenv").config();
const Server = require("./models/server");
const server = new Server();

server.listen();

server.middleware();



// Revision de codigo mejoramiento ||  validar que un string que contengaun numero Crear peliculas controllers
//Documentacion con Postman
// Relacion de genero con peliculas

