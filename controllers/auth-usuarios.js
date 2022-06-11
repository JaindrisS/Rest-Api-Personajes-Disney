const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuarios = require("../models/usuario");
const { generarJWT } = require("../helpers/generarJWT");
const { sendMail } = require("../helpers/emailer");

// Obtener usuarios guardados es la base de dats
const obtenerUsuarios = async (req = request, res = response) => {
  const usuario = await Usuarios.find({ estado: true });

  res.status(200).json({ usuario });
};

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

const actualizarUsuarios = async (req, res = response) => {
  const { id } = req.params;

  //Extraemos las propiedades q no queremos mostrar y devolvemos el resto
  const { _id, google, password, rol, ...resto } = req.body;

  let dateUp = new Date();
  let resultado = dateUp.toLocaleString();
  resto.upDate = resultado;
  //busca la informacion en el body por el id y actualiza
  const usuario = await Usuarios.findByIdAndUpdate(id, resto, {
    new: true,
  });

  res.json({
    msg: `La informacion se actualizo con exito`,
    usuario,
  });
};
// acesso de usuarios

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

module.exports = {
  registrarUsuarios,
  obtenerUsuarios,
  acceso,
  actualizarUsuarios,
};
