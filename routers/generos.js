const { Router } = require("express");
const { body, param } = require("express-validator");
const {
  crearGenero,
  actualizarGenero,
  borrarGenero,
  obtenerGenero,
} = require("../controllers/generos");
const { existeGenero } = require("../helpers/db-validar");
const { validarJwt, validarCampos, tieneRol } = require("../middleware");

const router = Router();

//obtenergeneros
router.get("/", obtenerGenero);

// Crear un genero
router.post(
  "/",
  [
    validarJwt,
    body("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  crearGenero
);

// Actualizar un genero
router.put(
  "/:id",
  [
    validarJwt,
    tieneRol("ADMIN_ROL"),
    param("id", "no es un id valido o no existe")
      .isMongoId()
      .custom(existeGenero),
    body("nombre", "debe pasar un nombre no puede estar vacio")
      .notEmpty()
      .optional(),
    validarCampos,
  ],
  actualizarGenero
);

// Borrar una genero
router.delete(
  "/:id",
  [
    validarJwt,
    tieneRol("ADMIN_ROL"),
    param("id", "no es un id valido o no existe")
      .isMongoId()
      .custom(existeGenero),
    validarCampos,
  ],
  borrarGenero
);

module.exports = router;
