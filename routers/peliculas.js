const { Router } = require("express");
const { body, param } = require("express-validator");
const { ExisteTitulo, existePeliculaPorId } = require("../helpers/db-validar");
const { validarCampos, validarJwt, tieneRol } = require("../middleware/index");
const {
  obtenerPeliculas,
  crearPelicula,
  actualizarPelicula,
  borrarPelicula,
  detallesPeliculas,
} = require("../controllers/peliculas");

const router = Router();

router.get("/detallesPeliculas", detallesPeliculas);

//obtener todas las peliculas
router.get("/", obtenerPeliculas);

// Crear una pelicula
router.post(
  "/",
  [
    [
      validarJwt,
      tieneRol("ADMIN_ROL", "USER_ROL"),
      body("titulo", "El titulo es obligatorio").not().isEmpty(),
      body("fechadecreacion", "la fecha es olbligatoria ").not().isEmpty(),
      body(
        "fechadecreacion",
        "la fecha  tiene que ser una fecha valida Ejemplo: 2021/12/05"
      ).isDate(),
      body("calificacion", "La Calificacion es obligatoria").not().isEmpty(),
      body(
        "calificacion",
        "La Calificacion tiene que ser un numero entero entre 1 y 5 "
      ).isInt({
        min: 1,
        max: 5,
      }),

      body("genero", "genero obligatorio  y necesita un mongoID valido")
        .notEmpty()
        .isMongoId(),

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
    body(
      "fechadecreacion",
      "la fecha  tiene que ser una fecha valida Ejemplo: 2021/12/05"
    )
      .isDate()
      .optional()
      .notEmpty(),
    body(
      "calificacion",
      "La Calificacion tiene que ser un numero entero entre 1 y 5 "
    )
      .isInt({
        min: 1,
        max: 5,
      })
      .notEmpty()
      .optional(),
    body("titulo", "No puede estar vacio").notEmpty().optional(),
    body("genero", "MongoID ID no valido").isMongoId().optional(),

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
