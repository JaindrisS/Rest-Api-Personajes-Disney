const { response, bcryptjs, Usuarios, generarJWT } = require("../userModules");

const acceso = async (req, res = response) => {
  const { correo, password } = req.body;
  const { token } = req.body;
  console.log(token);
  try {
    // verificando si el correo existe
    const usuario = await Usuarios.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "El usuario o el password no es valido",
      });
    }

    // verificar si el estado es true o a sido borrado

    if (!usuario.estado) {
      return res.status(400).json({
        msg: "el usuario o el password no es valido - estado true",
      });
    }

    // veficar el password

    const passwordValido = bcryptjs.compareSync(password, usuario.password);

    if (!passwordValido) {
      res.status(400).json({
        msg: "el usuario o password no es valido -  password false",
      });
    }

    // crear jwt
    const token = await generarJWT(usuario.id);

    res.json({
      msg: "acceso listo",
      usuario,
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ msg: "comunicarse con el administrador" });
  }
};

module.exports = acceso;
