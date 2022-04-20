const { Schema, model } = require("mongoose");

const personajeSchema = Schema({
  img: {
    type: String,
  },
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },

  historia: {
    type: String,
    required: [true, "la historia es obligatoria"],
  },
  PeliculaOserie: {
    type: String,
    required: [true, "el nombre de la pelicula es obligatorio"],
  },

  estado: {
    type: Boolean,
    default: true,
    required: [true, "el estado es obligatorio"],
  },
});

personajeSchema.methods.toJSON = function () {
  const { __v, ...personaje } = this.toObject();
  return personaje;
};

module.exports = model("personaje", personajeSchema);
