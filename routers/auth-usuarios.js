const { Router } = require("express");
const { body, param } = require("express-validator");
const { existeCorreo, existeNombreUsuario } = require("../helpers/db-validar");
const { validarCampos, validarJwt } = require("../middleware");
const {
  acceso,
  registrarUsuarios,
  actualizarUsuarios,
} = require("../useCases/auth/userControllers");

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
    body("password", "El password es obligatorio, minimo 6 numeros").isLength({
      min: 6,
    }),
    body("correo", "El correo no es valido o ya se encuentra registrado")
      .isEmail()
      .custom(existeCorreo),
    validarCampos,
  ],
  registrarUsuarios
);

// actualizar usuarios
router.put(
  "/:id",
  [
    validarJwt,
    body("nombre", "Debe ingresar algun nombre").notEmpty().optional(),
    body("nombre").custom(existeNombreUsuario).optional(),
    body("correo").custom(existeCorreo).optional(),
    body("password", "El password debe tener minimo 6 numeros")
      .isLength({
        min: 6,
      })
      .optional(),
  ],
  validarCampos,
  actualizarUsuarios
);

module.exports = router;
