const authRepository = require("../../../repositories/mongo/authRepository");
const { response, bcryptjs, sendMail } = require("../userModules");
// registrar el usuario
const registrarUsuarios = async (req, res = response) => {
  const { _id, estado, google, rol, password, ...resto } = req.body;

  const datos = {
    ...resto,
    password,
  };

  const usuario = await authRepository.create(datos);
  sendMail(usuario);

  //Encriptar password
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);

  let date = new Date();
  let resultado = date.toLocaleString();
  usuario.createAt = resultado;
  // guardar en db
  await usuario.save();

  return res.status(201).json({ usuario });
};

module.exports = registrarUsuarios;
