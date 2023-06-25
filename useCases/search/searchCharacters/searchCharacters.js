const { response, ObjectId, Personaje } = require("../searchModules");

const buscarPersonaje = async (termino = "", res = response) => {
  // busqueda por id de mongodb
  const esMongoId = ObjectId.isValid(termino);

  if (esMongoId) {
    const personaje = await Personaje.findById(termino);

    res.json({
      results:
        personaje && personaje.estado
          ? [personaje]
          : { msg: `El id del personaje ${termino} no existe o no es valido` },
    });
  }

  // buscar por nombre

  const regex = new RegExp(termino, "i");

  const personaje = await Personaje.find({
    $and: [{ nombre: regex }, { estado: true }],
  }).populate("peliculaoserie", "titulo");
  return res.json({
    results: personaje
      ? personaje
      : { msg: `El nombre del personaje ${termino} no existe` },
  });
};

module.exports = buscarPersonaje;
