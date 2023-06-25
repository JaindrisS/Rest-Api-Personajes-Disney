const { response, bcryptjs, Usuarios, sendMail } = require("../userModules");
// registrar el usuario
const registrarUsuarios = async (req, res = response) => {
  const { _id, estado, google, rol, password, ...resto } = req.body;

  const datos = {
    ...resto,
    password,
  };

  const usuario = await new Usuarios(datos);
  sendMail(usuario);

  //Encriptar password
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);

  let date = new Date();
  resultado = date.toLocaleString();
  usuario.createAt = resultado;
  // guardar en db
  await usuario.save();

  res.status(201).json({ usuario });
};

module.exports = registrarUsuarios;
