const authRepository = require("../../../repositories/mongo/authRepository");
const { response, bcryptjs, generarJWT } = require("../userModules");

const acceso = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    // verificando si el correo existe
    const usuario = await authRepository.getOne(correo);
    if (!usuario) {
      return res.status(401).json({
        msg: "El usuario o el password no es valido",
      });
    }

    // verificar si el estado es true o a sido borrado

    if (!usuario.estado) {
      return res.status(401).json({
        msg: "el usuario o el password no es valido - estado true",
      });
    }

    // veficar el password

    const passwordValido = bcryptjs.compareSync(password, usuario.password);

    if (!passwordValido) {
      res.status(401).json({
        msg: "el usuario o password no es valido -  password false",
      });
    }

    // crear jwt
    const token = await generarJWT(usuario.id);

    return res.status(200).json({
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
