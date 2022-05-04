const express = require("express");
const cors = require("cors");
const { dbConeccion } = require("../db/config");
class Server {
  constructor() {
    // config
    this.app = express();
    this.port = process.env.PORT || 8081;
    this.Paths = {
      personajes: "/personajes",
      peliculas: "/peliculas",
      usuarios: "/auth",
      generos: "/generos",
    };
    //Conectar base datos
    this.ConectarDB();
    // middleware
    this.middleware();
    //rutas de la aplicaciom
    this.routers();
  }
  async ConectarDB() {
    await dbConeccion();
  }

  middleware() {
    // cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
  }
  routers() {
    this.app.use(this.Paths.personajes, require("../routers/personajes"));
    this.app.use(this.Paths.peliculas, require("../routers/peliculas"));
    this.app.use(this.Paths.usuarios, require("../routers/auth-usuarios"));
    this.app.use(this.Paths.generos, require("../routers/generos"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor Encendido en la ruta  ${this.port}`);
    });
  }
}
module.exports = Server;
