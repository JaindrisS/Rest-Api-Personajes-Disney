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
  peliculaoserie: {
    type: Schema.Types.ObjectId,
    ref: "pelicula",
    require: [true, "La pelicula asociada o serie es obligatoria"],
  },

  estado: {
    type: Boolean,
    default: true,
  },
});

personajeSchema.methods.toJSON = function () {
  const { __v, estado, ...personaje } = this.toObject();
  return personaje;
};

module.exports = model("personaje", personajeSchema);
