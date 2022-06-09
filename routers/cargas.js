const { Router } = require("express");
const { body, param } = require("express-validator");
const actualizarImagen = require("../controllers/cargas");
const { coleccionesPermitidas } = require("../helpers/db-validar");
const { validarArchivos, validarCampos } = require("../middleware");

const router = Router();

router.put(
  "/:coleccion/:id",
  [
    validarArchivos,
    param("id", "Debe ser un id de mongo").isMongoId(),
    param("coleccion").custom((c) =>
      coleccionesPermitidas(c, [
        "usuarios",
        "personajes",
        "peliculas",
        "generos",
      ])
    ),
    validarCampos,
  ],
  actualizarImagen
);

// router.put();

module.exports = router;
