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
  peliculaasociada: {
    type: Schema.Types.ObjectId,
    ref: "pelicula",
    // required: true,
  },

  estado: {
    type: Boolean,
    default: true,
  },
});

generoSchema.methods.toJSON = function () {
  const { __v, ...genero } = this.toObject();
  return genero;
};

module.exports = model("Genero", generoSchema);
