const dotenv = require("dotenv").config();
const Server = require("./models/server");

const server = new Server();

server.listen();

server.middleware();

// Busqueda por parametros de pelculas o series y personajes
// relacion de genero con peliculas
// relacion de peliculas con personajes asociados
