const { Router } = require("express");
const { body, param } = require("express-validator");
const {
  crearGenero,
  actualizarGenero,
  borrarGenero,
} = require("../controllers/generos");
const { existeGenero } = require("../helpers/db-validar");
const { validarJwt, validarCampos, tieneRol } = require("../middleware");

const router = Router();

//obtenergeneros
router.get("/", (req, res) => {
  res.json("Get");
});

//obtener un genero
router.get("/:id", (req, res) => {
  res.json("Get-id");
});

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
