const { response, request, ObjectId, Pelicula } = require("../searchModules");

const buscarPeliculas = async (termino = "", res = response, req = request) => {
  const esMongoId = ObjectId.isValid(termino);

  if (esMongoId) {
    const pelicula = await Pelicula.findById(termino).populate(
      "genero",
      "nombre"
    );
    return res.json({
      Results:
        pelicula && pelicula.estado
          ? [pelicula]
          : { msg: "La pelicula no existe" },
    });
  }

  // busqueda por parametros ASC | DES
  if (termino) {
    if (termino === "asc") {
      const pelicula = await Pelicula.find().sort({ fechadecreacion: 1 });

      return res.json({
        Peliculas: pelicula,
      });
    }
    if (termino === "desc") {
      const pelicula = await Pelicula.find().sort({ fechadecreacion: -1 });

      return res.json({
        Peliculas: pelicula,
      });
    }
  }

  // Busqueda por nombre
  const regex = new RegExp(termino, "i");

  const pelicula = await Pelicula.find({
    $and: [{ titulo: regex }, { estado: true }],
  });

  return res.json({
    Results: pelicula ? pelicula : { msg: `La pelicula ${termino} no existe` },
  });
};

module.exports = buscarPeliculas;
