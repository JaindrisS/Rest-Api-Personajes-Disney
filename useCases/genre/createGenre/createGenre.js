const { request, response, Genero } = require("../genreModules");

const crearGenero = async (req = request, res = response) => {
  const { ...body } = req.body;

  const nombre = body.nombre.toUpperCase();

  const datos = {
    ...body,
    nombre,
  };

  const genero = await new Genero(datos);
  let date = new Date();
  resultado = date.toLocaleString();
  genero.createAt = resultado;
  await genero.save();

  res.json({
    genero,
  });
};

module.exports = crearGenero;
