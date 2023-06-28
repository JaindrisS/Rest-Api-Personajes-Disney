const updateImage = require("../../../repositories/mongo/loadRepository");
const { response, request, cloudinary } = require("../loadsModules");

const actualizarImagen = async (req = request, res = response) => {
  const { id, coleccion } = req.params;
  const files = req.files;
  const modelo = await updateImage(id, coleccion, cloudinary, files);
  return res.status(200).json(modelo);
};

module.exports = actualizarImagen;
