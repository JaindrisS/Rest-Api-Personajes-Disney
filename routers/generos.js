const { Router } = require("express");
const {} = require("../controllers/personajes");

const router = Router();

//obtener todas las categorias
router.get("/", (req, res) => {
  res.json("Get");
});

//obtener una categoria
router.get("/:id", (req, res) => {
  res.json("Get-id");
});

// Crear una categoria
router.post("/", (req, res) => {
  res.json("Post");
});

// Actualizar un registro
router.put("/:id", (req, res) => {
  res.json("put");
});

// Borrar una categoria
router.delete("/", (req, res) => {
  res.json("Hola");
});

module.exports = router;
