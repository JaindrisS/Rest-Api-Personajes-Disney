const { Router } = require("express");
const { body, param } = require("express-validator");
const {
  existeCorreo,
  existeNombreUsuario,
  existeRol,
} = require("../helpers/db-validar");
const { validarCampos } = require("../middleware/validarCampos");
const { registrarUsuarios } = require("../controllers/auth-usuarios");

const router = Router();

// login de usuario
router.post("/");

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
