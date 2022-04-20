const { Schema, model } = require("mongoose");

const peliculaSchema = Schema({
  img: {
    type: String,
  },
  titulo: {
    type: String,
    required: [true, "El tituloes obligatorio"],
    unique: true,
  },

  fechaDeCreacion: {
    type: String,
    required: [true, "la la fecha es obligatoria"],
  },

  calificacion: {
    type: Number,
    required: [true, "la calificacion es obligatoria"],
  },

  PersonajesAsociados: {
    type: [],
    required: [true, "la los personajes asociados son  obligatorios"],
  },

  estado: {
    type: Boolean,
    default: true,
    required: [true, "el estado es obligatorio"],
  },
});

peliculaSchema.methods.toJSON = function () {
  const { __v, ...pelicula } = this.toObject();
  return pelicula;
};

module.exports = model("pelicula", peliculaSchema);
