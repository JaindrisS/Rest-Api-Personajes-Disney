const { request, response, Personaje } = require("../characterModules");

const crearPersonaje = async (req = request, res = response) => {
  const { estado, nombre, ...body } = req.body;

  const datos = {
    ...body,
    nombre: nombre.toUpperCase(),
  };

  const personaje = await new Personaje(datos);

  let date = new Date();
  resultado = date.toLocaleString();
  personaje.createAt = resultado;

  // Guardar en BD
  await personaje.save();

  res.json({
    personaje,
  });
};

module.exports = crearPersonaje;
