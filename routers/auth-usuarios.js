const { Router } = require("express");
const { body, param } = require("express-validator");
const {
  existeCorreo,
  existeNombreUsuario,
  existeRol,
} = require("../helpers/db-validar");
const { validarCampos } = require("../middleware/validarCampos");
const { registrarUsuarios, acceso } = require("../controllers/auth-usuarios");

const router = Router();

// acceso de usuario
router.post(
  "/acceso",
  [
    body("correo", "El correo es obligatorio").isEmail().notEmpty(),
    body("password", "El password es obligatorio, minimo 6 numeros")
      .notEmpty()
      .isLength({ min: 6 }),
    validarCampos,
  ],
  acceso
);

// registrar usuarios
router.post(
  "/registrar",
  [
    body("nombre", "El nombre es obligatorio - ya esta registrado")
      .notEmpty()
      .custom(existeNombreUsuario),
    body("password", "El correo es obligatorio, minimo 6 numeros").isLength({
      min: 6,
    }),
    body("correo", "El correo no es valido o ya se encuentra registrado")
      .isEmail()
      .custom(existeCorreo),
    body("rol").custom(existeRol),
    validarCampos,
  ],
  registrarUsuarios
);

module.exports = router;
