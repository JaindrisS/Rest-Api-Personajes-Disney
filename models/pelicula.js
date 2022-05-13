const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const peliculaSchema = Schema({
  imagen: {
    type: String,
    default: null,
  },
  titulo: {
    type: String,
    required: [true, "El tituloes obligatorio"],
    // unique: true,
  },

  fechadecreacion: {
    type: String,
    required: [true, "la la fecha es obligatoria"],
  },

  calificacion: {
    type: Number,
    required: [true, "la calificacion es obligatoria"],
  },

  PersonajesAsociados: {
    type: mongoose.Types.ObjectId,
  },

  genero: {
    type: Schema.Types.ObjectId,
    ref: "Genero",
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
