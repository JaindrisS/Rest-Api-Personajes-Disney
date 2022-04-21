const dotenv = require("dotenv").config();
const Server = require("./models/server");

const server = new Server();

server.listen();

server.middleware();

// Crear validacion de jwt incluir en las rutas necesarias
// hacer la verificacion de roles
