const dotenv = require("dotenv").config();
const Server = require("./models/server");

const server = new Server();

server.listen();

server.middleware();


// crear jwt para la ruta de acceso
