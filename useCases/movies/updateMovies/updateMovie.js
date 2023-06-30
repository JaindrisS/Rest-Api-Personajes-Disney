const { update } = require("../../../repositories/mongo/moviesRepository");
const { request, response } = require("../moviesModules");
const actualizarPelicula = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, estado, ...body } = req.body;

  const response = await update(id, body);

  return res.json({
    response,
  });
};

module.exports = actualizarPelicula;
