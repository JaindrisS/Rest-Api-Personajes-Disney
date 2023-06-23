const { Router } = require("express");
const  buscar  = require("../useCases/search/generalSearch/search");

const router = Router();

router.get("/:coleccion/:termino", buscar);

module.exports = router;
