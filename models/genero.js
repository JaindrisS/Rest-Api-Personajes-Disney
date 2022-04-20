const { Schema, model } = require("mongoose");

const generoSchema = Schema({
  img: {
    type: String,
  },
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  peliculaAsociada: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
});
module.exports = model("genero", generoSchema);
