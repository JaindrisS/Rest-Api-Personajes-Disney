const { response, request } = require("express");
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);
const { Usuario, Personaje, Pelicula, Genero } = require("../models/index");

const actualizarImagen = async (req = request, res = response) => {
  const { id, coleccion } = req.params;
  let modelo;
  switch (coleccion) {
    case "usuarios":
      modelo = await Usuario.findById(id);
      if (!modelo) {
        return res
          .status(400)
          .json({ msg: `No existe un usuario con el id ${id}` });
      }
      break;

    case "personajes":
      modelo = await Personaje.findById(id);
      if (!modelo) {
        return res
          .status(400)
          .json({ msg: `No existe un personaje con el id ${id}` });
      }
      break;

    case "peliculas":
      modelo = await Pelicula.findById(id);
      if (!modelo) {
        return res
          .status(400)
          .json({ msg: `No existe una pelicula con el id ${id}` });
      }

      break;
    case "generos":
      modelo = await Genero.findById(id);

      if (!modelo) {
        return res
          .status(400)
          .json({ msg: `No existe un genero con el id ${id}` });
      }

      break;

    default:
      return res.status(500).json({ msg: "Se me olvido validar esto" });
  }
  // Borrar imagenes previoas en cloudinary
  if (modelo.img) {
    let nombreArray = modelo.img.split("/");
    let nombre = nombreArray[nombreArray.length - 1];
    let [public_id] = nombre.split(".");
    cloudinary.uploader.destroy(public_id);
  }

  // Guardar nueva imagen en cloudinary
  const { tempFilePath } = req.files.archivo;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
  modelo.img = secure_url;
  await modelo.save();
  res.json(modelo);
};

module.exports = actualizarImagen;
