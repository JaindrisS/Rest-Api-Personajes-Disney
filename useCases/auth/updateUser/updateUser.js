const authRepository = require("../../../repositories/mongo/authRepository");
const { response } = require("../userModules");

const actualizarUsuarios = async (req, res = response) => {
  const { id } = req.params;

  //Extraemos las propiedades q no queremos mostrar y devolvemos el resto
  const { _id, google, password, rol, ...resto } = req.body;

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  resto.upDate = resultado;
  //busca la informacion en el body por el id y actualiza
  const usuario = await authRepository.getByIdAndUpdate(id, resto);

  return res.status(200).json({
    msg: `La informacion se actualizo con exito`,
    usuario,
  });
};

module.exports = actualizarUsuarios;
