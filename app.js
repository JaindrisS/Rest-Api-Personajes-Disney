const dotenv = require("dotenv").config();
const Server = require("./models/server");
const server = new Server();

server.listen();

server.middleware();

// terminar el update de usuarios
