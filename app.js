const dotenv = require("dotenv").config();
const Server = require("./models/server");
const server = new Server();

server.listen();

server.middleware();
// Agregar Verificacion por correo
// Agregar Pagina Html
//Actualizar password usuarios
