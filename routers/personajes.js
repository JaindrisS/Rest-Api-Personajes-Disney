const { Router } = require("express");
const { body, param } = require("express-validator");
const { ExisteNombre, existePersonajePorId } = require("../helpers/db-validar");
const { validarCampos } = require("../middleware/validarCampos");
const {
  obtenerPersonaje,
  crearPersonaje,
  actualizarPersonaje,
  borrarPersonaje,
} = require("../controllers/personajes");

const router = Router();

//obtener todas las categorias
router.get("/", obtenerPersonaje);

//obtener una categoria
router.get("/:id");

// Crear una categoria
router.post(
  "/",
  [
    body("nombre", "El nombre es obligatorio").not().isEmpty(),
    body("historia", "la historia es obligatoria").not().isEmpty(),
    body("PeliculaOserie", "El nombre es obligatorio").not().isEmpty(),
    body("nombre").custom(ExisteNombre),
    validarCampos,
  ],
  crearPersonaje
);

// Actualizar un registro
router.put(
  "/:id",
  [
    [
      param("id", "No es un ID válido").isMongoId(),
      param("id").custom(existePersonajePorId),
      validarCampos,
    ],
  ],
  actualizarPersonaje
);

// Borrar una categoria
router.delete(
  "/:id",
  [
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom(existePersonajePorId),
    validarCampos,
  ],
  borrarPersonaje
);

module.exports = router;
