const { Router } = require("express");
const { body, param } = require("express-validator");

const router = Router();

router.get("/:coleccion/:id");

// router.put();

module.exports = router;
