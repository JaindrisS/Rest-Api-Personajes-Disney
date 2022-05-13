const { Router } = require("express");
const { body, param } = require("express-validator");
const {
  existePeliculaPorId,
  existePersonajePorId,
} = require("../helpers/db-validar");
const { validarCampos, validarJwt, tieneRol } = require("../middleware/index");
const {
  crearPersonaje,
  actualizarPersonaje,
  borrarPersonaje,
  listadoDePersonajes,
} = require("../controllers/personajes");

const router = Router();

//obtener todos los personajes
router.get("/", listadoDePersonajes);

//obtener un personaje
router.get("/:id");

// Crear una personaje
router.post(
  "/",
  [
    validarJwt,
    tieneRol("ADMIN_ROL", "USER_ROL"),
    body(
      "peliculaoserie",
      "el id de la pelicula o serie no es valido"
    ).isMongoId(),
    body("nombre", "El nombre es obligatorio").not().isEmpty(),
    body("historia", "la historia es obligatoria").not().isEmpty(),
    body("peliculaoserie").custom(existePeliculaPorId),
    validarCampos,
  ],
  crearPersonaje
);

// Actualizar un registro
router.put(
  "/:id",
  [
    [
      validarJwt,
      tieneRol("ADMIN_ROL", "USER_ROL"),
      param("id", "No es un ID válido")
        .isMongoId()
        .custom(existePersonajePorId),
      body("peliculaoserie", "El id de la pelicula no es valido")
        .isMongoId()
        .custom(existePeliculaPorId)
        .optional(),
      body("nombre", "El nombre no puede estar vacio").not().isEmpty(),
      body("historia", "La historia no puede estar vacia").not().isEmpty(),

      validarCampos,
    ],
  ],
  actualizarPersonaje
);

// Borrar una categoria
router.delete(
  "/:id",
  [
    validarJwt,
    tieneRol("ADMIN_ROL", "USER_ROL"),
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom(existePersonajePorId),
    validarCampos,
  ],
  borrarPersonaje
);

module.exports = router;
