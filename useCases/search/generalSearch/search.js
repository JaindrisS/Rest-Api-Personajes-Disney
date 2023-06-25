const { coleccionesPermitidas } = require("../searchModules");
const { buscarPersonaje, buscarPeliculas } = require("../searchControllers");

const buscar = (req = request, res = response) => {
  const { coleccion, termino } = req.params;

  if (!coleccionesPermitidas.includes(coleccion)) {
    return res.status(400).json({
      msg: `Las colecciones permitidas son ${coleccionesPermitidas}`,
    });
  }

  switch (coleccion) {
    case "peliculas":
      buscarPeliculas(termino, res, req);
      break;
    case "personajes":
      buscarPersonaje(termino, res);
      break;
    default:
      res.status(500).json({
        msg: " busqueda no agregada",
      });
      break;
  }
};
module.exports = buscar;
