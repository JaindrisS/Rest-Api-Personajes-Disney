const { deleteGenre } = require("../../../repositories/mongo/genreRepository");
const { request, response } = require("../genreModules");

const borrarGenero = async (req = request, res = response) => {
  const { id } = req.params;

  const response = await deleteGenre(id);

  return res.status(200).json({
    msg: "Borrado con exito",
    response,
  });
};

module.exports = borrarGenero;
