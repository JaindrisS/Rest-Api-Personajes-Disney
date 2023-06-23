const { request, response, Genero } = require("../genreModules");
const actualizarGenero = async (req = request, res = response) => {
  const { id } = req.params;
  const { ...body } = req.body;
  const datos = {
    ...body,
    nombre: body.nombre.toUpperCase(),
  };

  const genero = await Genero.findByIdAndUpdate(id, datos);

  res.json({
    msg: "Genero actualizado",
    genero,
  });
};

module.exports = actualizarGenero;
