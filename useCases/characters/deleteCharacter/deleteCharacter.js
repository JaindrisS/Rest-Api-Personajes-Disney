const { request, response, Personaje } = require("../characterModules");

const borrarPersonaje = async (req = request, res = response) => {
  const { id } = req.params;
  const personaje = await Personaje.findByIdAndUpdate(id, {
    estado: false,
    new: true,
  });

  res.json({ msg: "Personaje Borrado ", personaje });
};

module.exports = borrarPersonaje;
