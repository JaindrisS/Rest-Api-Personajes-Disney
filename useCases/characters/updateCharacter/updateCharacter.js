const { request, response, Personaje } = require("../characterModules");

const actualizarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, upDate, ...body } = req.body;

  if (body.nombre) {
    body.nombre = body.nombre.toUpperCase();
  }

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  body.upDate = resultado;

  const datos = {
    ...body,
  };
  const personaje = await Personaje.findByIdAndUpdate(id, datos);

  res.json(personaje);
};

module.exports = actualizarPersonaje;
