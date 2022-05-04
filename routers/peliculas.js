const { Router } = require("express");
const { body, param } = require("express-validator");
const { ExisteTitulo, existePeliculaPorId } = require("../helpers/db-validar");
const { validarCampos, validarJwt, tieneRol } = require("../middleware/index");
const {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
} = require("../controllers/peliculas");

const router = Router();

//obtener todas las peliculas
router.get("/", obtenerPeliculas);

//obtener una pelicula
router.get("/:id", (req, res) => {
  res.json("Get-id");
});

// Crear una pelicula
router.post(
  "/",
  [
    [
      validarJwt,
      tieneRol("ADMIN_ROL", "USER_ROL"),
      body("titulo", "El titulo es obligatorio").not().isEmpty(),
      body("fechaDeCreacion", "la fecha es olbligatoria es obligatoria")
        .not()
        .isEmpty(),
      body(
        "fechaDeCreacion",
        "la fecha es tiene que ser una fecha valida"
      ).isDate(),
      body("calificacion", "La Calificacion es obligatoria").not().isEmpty(),
      body(
        "calificacion",
        "La Calificacion tiene que ser un numero entero entre 1 y 5 "
      ).isInt({
        min: 1,
        max: 5,
      }),
      body("PersonajesAsociados", "Personajes Asociados es obligatorio")
        .not()
        .isEmpty(),
      body(
        "PersonajesAsociados",
        "Personajes Asociados tiene que tener los elementos en un array"
      ).isArray({ min: 1 }),

      // body("titulo").custom(ExisteTitulo),
      validarCampos,
    ],
  ],
  crearPelicula
);

// Actualizar una pelicula
router.put(
  "/:id",
  [
    validarJwt,
    tieneRol("ADMIN_ROL", "USER_ROL"),
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom(existePeliculaPorId),
    validarCampos,
  ],
  actualizarPelicula
);

// Borrar una pelicula
router.delete(
  "/:id",
  [
    validarJwt,
    tieneRol("ADMIN_ROL"),
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom(existePeliculaPorId),
    validarCampos,
  ],
  borrarPelicula
);

module.exports = router;
